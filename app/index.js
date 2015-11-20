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
  controller: (prop) => {
    //TODO: LANGUAGE!!!
    //TODO: LOGIN and CREDENTIALS
    let c = {
      files:    m.prop( [] ),
      category: m.prop( [] ),
      columnHeader: m.prop( columnHeader ),
      menuFilter: m.prop({type: 'root'}),
      store: prop.store,
    }

    //<ColumnVisibility columnHeader={ c.columnHeader } />
    return c
  },

  view: c => (
    <div>
      <Model store={c.store} files={c.files} category={c.category} />
      <h1>TRANSFER</h1>
      <p>
        <a href='/login' config={ m.route }>LOGIN</a>
      </p>
      <Header />
      <Menu category={c.category}
            menuFilter={c.menuFilter}
            store={c.store}/>
      { ( c.files().size > 0)
        ? <Table files={ c.files }
                 columnHeader={ c.columnHeader }
                 menuFilter={c.menuFilter}
                 store={c.store}/>
        : ''
      }
    </div>
  ),
}
