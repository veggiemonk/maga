import m from 'mithril'
import 'fetch';

import { Map, fromJS as toImmutable } from 'immutable'

// DATA
import { App } from './model'
import { groupMenu, sanitize } from './data'

// Components
import Header from './header'
import Menu from './menu'
import Table from './table'

import { basicConfig } from './settings'

import { inc, dec, stackLoader, compute, loaderDisplay } from './utils'

/** STYLES: CSS MODULES **/
import styles from './index.css!'

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
        { ( ctrl.columnConfig().size > 0 && ctrl.files().size > 0)
          ? <Table colConfig={ctrl.columnConfig} files={ctrl.files}/>
          : ''
        }
      </div>
    )
  }
}