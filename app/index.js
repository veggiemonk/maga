import m from 'mithril'
import 'fetch'
import { Map, fromJS as toImmutable } from 'immutable'

// DATA
import { App } from './model'
import { groupMenu, sanitize } from './data'
import { columnHeader, visibleColumn } from './settings'

// Components
import Header from './header'
import Menu   from './menu'
import Table  from './table'

// Column Configuration
//import { basicConfig } from './settings'

import { inc, dec, stackLoader, loaderDisplay } from './utils'

/** STYLES: CSS MODULES **/
import styles from './css/index.css!'

export default {
  controller: () => {
    var c = {
      files:    m.prop( [] ),
      category: m.prop( [] ),

      columnHeader: m.prop( columnHeader ),
      init: () => {
        inc( stackLoader )
        m.startComputation()
        Promise.all( [ App.fetchFileList(), App.fetchCategoryList() ] )
          .then( ( [FileList, CategoryList] ) => {
            c.files( toImmutable( sanitize( FileList, CategoryList ) ) )
            c.category( toImmutable( groupMenu( CategoryList, FileList ) ) )

            //console.log( c.category().toJS() )
          } )
          .then( () => {
            dec( stackLoader )
            m.endComputation()
          } )
      },
    }

    c.init()

    return c
  },

  view: ctrl => (
    <div>
      <div class={ styles.loading } style={ loaderDisplay() }>
        <div class={ styles.pulseloader }></div>
      </div>
      <Header />
      <Menu category={ctrl.category}/>
      <h1>Hello Maga: App</h1>
      <p>
        <a href='/login' config={ m.route }>LOGIN</a>
      </p>
      { ( ctrl.files().size > 0)
        ? <Table files={ ctrl.files } columnHeader={ ctrl.columnHeader }/>
        : ''
      }
    </div>
  ),
}
