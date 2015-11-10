import m from 'mithril'
import 'fetch';
import { Map } from 'immutable'

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

const sanitize = dataArray => {
  return dataArray.map( obj => {
    Object.keys( obj ).map( key => {
      // if (key == 'date') tmp[key] = moment(obj[key]);
      if ( key == 'fileId' ) obj[key] = Number( obj[key] );
    } );
    return obj;
  } )
};

//MODEL
let App = {
  fetchFileList:     () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() ),
  fetchCategoryList: () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() )
}

//TODO: merge user config with default config
//TODO: use immutable.js for configuration --> undo/redo

export default {
  controller: () => {
    var c = {
      files:    m.prop( [] ),
      category: m.prop( [] ),
      columnConfig: basicConfig,
      init:     () => {
        inc( stackLoader )
        m.startComputation();
        Promise.all( [App.fetchFileList(), App.fetchCategoryList()] )
          .then( ([FileList, CategoryList]) => {
            c.files( sanitize( FileList ) )
            c.category( CategoryList )
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
          <div class="{ /*styles.pulse-loader*/ }"></div>
        </div>
        <Header />
        <Menu category={ctrl.category}/>
        <h1>Hello Maga: App</h1>
        <p>
          <a href="/login" config={ m.route }>LOGIN</a>
        </p>
        <Table colConfig={ctrl.columnConfig} files={ctrl.files}>
        </Table>
      </div>
    )
  }
}