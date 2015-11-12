import m from 'mithril'
import 'fetch';
import moment from 'moment'
import _ from 'lodash'
import { Map, fromJS as toImmutable } from 'immutable'

import Header from './header.js'
import Menu from './menu.js'
import Table from './table.js'

import {
  basicConfig,
  fetchFile,
  fetchCategory,
  headers
} from './settings.js'

import {
  inc,
  dec,
  stackLoader,
  loaderDisplay,
  formatExtension,
  formatSize
} from './utils.js'

import styles from './index.css!'

const getUsedRef = () => {
  let a = [], countFilePerCat = [];
  let ref;

  //reset number of file
  while (countFilePerCat.length > 0) { countFilePerCat.pop(); }
  countFilePerCat['upload'] = 0;
  countFilePerCat['other']  = 0;

  _.forEach(data, function (item) {
    ref = parseInt(item.referenceDocument);

    if (!isNaN(ref) && username !== item.uploadUserName) {
      a.push(ref);
      countFilePerCat[ref] ? countFilePerCat[ref] += 1 : countFilePerCat[ref] = 1;
    } else {
      a.push(-1);
      if (username !== item.uploadUserName) {countFilePerCat['other'] += 1; }
    }

    if (item.uploadUserName === username) {countFilePerCat['upload'] += 1; }

  });

  return _.uniq(a);
}

const groupMenu = (category, files) => {
  let refDocUsed = _.sortBy(_.uniq(_.pluck(files, 'referenceDocument')))
  //console.log(refDocUsed)
  return _.groupBy(
    _.filter( category, (obj) => {
      if (_.contains(refDocUsed, obj.referenceDocument)) { return obj; }
    }),
    obj => obj.categoryNumber
  );
}
const sanitize = (files, colConfig, category) => {
  let username = sessionStorage.username || '';

  return files.map( row => {
    Object.keys( row ).map( key => {
      // if (key == 'date') tmp[key] = moment(obj[key]);
      if ( key == 'fileId' ) row[key] = Number( row[key] );

      let getContent = col => {
        row[key] = ( ( colConfig.get( col ) && colConfig.get( col ).content ) || row[key] )
      };
      let options    = {
        'index':             () => {},
        'checkbox':          () => { getContent( 'checkbox' )},
        'notDownloaded':     () => {
          row[key]
           ? row[key] = '<i style="color:green" class="fa fa-download"></i>'
           : row[key] = '<i style="color:red" class="fa fa-download"></i>'
        },
        'downloadCount':     () => { },
        'date':              () => {row.dateFormatted = moment( row.date, 'YYYY-MM-DD' ).format( 'DD/MM/YYYY' )},
        'fileId':            () => { row[key] = Number( row[key] ) },
        'fileName':          () => {},
        'employerNumber':    () => { row[key] = Number( row[key] ) },
        'uploadUserName':    () => {
          if ( row[key] === 'trf_fich' ) { row[key] = 'Group S'}
          row.dlClass = row.uploadUserName === username ? 'fa-upload' : 'fa-download';
        },
        'label':             () => {/* TODO: FILL IT WITH CATEGORY if referenceDocument === ''*/},
        'referenceDocument': () => { row[key] ? row[key] = Number( row[key] ) : '' },
        'size':              () => { row.sizeFormatted = formatSize( row[key] )},
        'extension':         () => { row.extensionFormatted = formatExtension( row[key] ) },
        'path':              () => {},
        'referenceClient':   () => {},
        'counter':           () => {},
        'referenceGroupS':   () => {},
        'uploadStamp':       () => {},
        'uploaderComment':   () => { row.uploaderCommentLimit = row[key].substring( 0, 20 )},
        'default':           () => {} //noop
      };
      // invoke it
      (options[key] || options['default'])();
    } );

    //Meta-data
    row.checkbox         = colConfig.get( 'checkbox' ).content
    row.remove           = colConfig.get( 'remove' ).content
    row.alreadyDL        = row.downloadCount > 0 ? 'text-muted' : 'text-primary'
    const date           = moment( row.uploadStamp, 'MM/DD/YYYY hh:mm:ss a' )
    row.uploadStamp      = date.format( 'DD/MM/YYYY HH:mm:ss' )
    row.uploadStampOrder = date.format( 'YYYY/MM/DD HH:mm:ss' )

    return row;
  } )
};

//MODEL
let App = {
  fetchFileList:     () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() ),
  fetchCategoryList: () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() )
}

//TODO: use immutable.js for configuration --> undo/redo

export default {
  controller: () => {
    var c = {
      files:        m.prop( [] ),
      category:     m.prop( [] ),
      columnConfig: m.prop( basicConfig ),
      init:         () => {
        inc( stackLoader )
        m.startComputation();
        Promise.all( [ App.fetchFileList(), App.fetchCategoryList() ] )
          .then( ( [FileList, CategoryList] ) => {
            c.files( toImmutable( sanitize( FileList, c.columnConfig(), CategoryList ) ) )
            c.category( toImmutable( groupMenu( CategoryList, FileList ) ) )
            //console.log( c.category().toJS() );
          } )
          .then( () => {
            dec( stackLoader )
            m.endComputation()
          } );
      }
    }
    c.init();

    return c;
  },
  view:       ctrl => {
    return (
      <div>
        <div class={ styles.loading } style={ loaderDisplay() }>
          <div class={ styles.pulseloader }></div>
        </div>
        <Header />
        <Menu category={ctrl.category}/>
        <h1>Hello Maga: App</h1>
        <p>
          <a href="/login" config={ m.route }>LOGIN</a>
        </p>
        { ( ctrl.columnConfig().count() > 0 && ctrl.files().count() > 0)
          ? <Table colConfig={ctrl.columnConfig} files={ctrl.files}/>
          : ''
        }

      </div>
    )
  }
}