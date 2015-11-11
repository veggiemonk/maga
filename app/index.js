import m from 'mithril'
import 'fetch';
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

import { inc, dec, stackLoader, loaderDisplay } from './utils.js'

import styles from './index.css!'

const sanitize = ( dataArray, colConfig ) => {
  return dataArray.map( obj => {
    Object.keys( obj ).map( key => {
      // if (key == 'date') tmp[key] = moment(obj[key]);
      if ( key == 'fileId' ) obj[ key ] = Number( obj[ key ] );

      let options = {
        'index': () => {},
        'checkbox': () => {},
        'notDownloaded': () => {
          obj[key]
            ? obj[key] = '<i style="color:green" class="fa fa-download"></i>'
            : obj[key] = '<i style="color:red" class="fa fa-download"></i>'
        },
        'downloadCount': () => {},
        'date': () => {},
        //'date': () => obj[key] = moment(obj[key]),
        'fileId': () => { obj[ key ] = Number( obj[ key ] ) },
        'fileName': () => {},
        'uploadUserName': () => {},
        'label': () => {},
        'referenceDocument': () => {},
        'size': () => {},
        'extension': () => {},
        'path': () => {},
        'referenceClient': () => {},
        'counter': () => {},
        'referenceGroupS': () => {},
        'uploadStamp': () => {},
        'uploaderComment': () => {},
        'remove': () => {},
        'default': () => {} //noop
      };

      // invoke it
      (options[ key ] || options[ 'default' ])();
    } );
    return obj;
  } )
};

//MODEL
let App = {
  fetchFileList: () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() ),
  fetchCategoryList: () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() )
}

//TODO: merge user config with default config
//TODO: use immutable.js for configuration --> undo/redo

export default {
  controller: () => {
    var c = {
      files: m.prop( [] ),
      category: m.prop( [] ),
      columnConfig: m.prop( basicConfig ),
      init: () => {
        inc( stackLoader )
        m.startComputation();
        Promise.all( [ App.fetchFileList(), App.fetchCategoryList() ] )
          .then( ( [FileList, CategoryList] ) => {
            c.files( toImmutable( sanitize( FileList, c.columnConfig() ) ) )
            c.category( toImmutable( CategoryList ) )
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
  view: ctrl => {
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