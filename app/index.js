import m from 'mithril'
import 'fetch'
import { Map, fromJS as toImmutable } from 'immutable'

// DATA
import Model from './model'

import { columnHeader } from './settings'

// Components
import Header from './header'
import Menu   from './menu'
import Table  from './table'
import ColumnVisibility  from './columnVisibility'

//utils
import { inc, dec, stackLoader, loaderDisplay } from './utils'

export default {
  controller: () => {
    //TODO: LANGUAGE!!!
    //TODO: LOGIN and CREDENTIALS
    let c = {
      files:    m.prop( [] ),
      category: m.prop( [] ),
      columnHeader: m.prop( columnHeader ),
      menuFilter: m.prop({type: 'root'}),

      /*init: () => {
        inc( stackLoader )
        m.startComputation()
        Promise.all( [ App.fetchFileList(), App.fetchCategoryList() ] )
          .then( ( [FileList, CategoryList] ) => {
            c.files( toImmutable( sanitize( FileList, CategoryList ) ) )
            c.category( toImmutable( groupMenu( CategoryList, FileList ) ) )
          } )
          .then( () => {
            dec( stackLoader )
            m.endComputation()
          } )
      },*/
    }

    /*c.init()*/
    //<ColumnVisibility columnHeader={ c.columnHeader } />
    return c
  },

  view: c => (
    <div>
      <Model files={c.files} category={c.category} />
      <h1>TRANSFER</h1>
      <p>
        <a href='/login' config={ m.route }>LOGIN</a>
      </p>
      <Header />
      <Menu category={c.category}
            menuFilter={c.menuFilter}/>
      { ( c.files().size > 0)
        ? <Table files={ c.files }
                 columnHeader={ c.columnHeader }
                 menuFilter={c.menuFilter} />
        : ''
      }
    </div>
  ),
}
