import m from 'mithril'
import 'fetch'
import { Map, List, fromJS as toImmutable } from 'immutable'

// ActionCreators
import { loadData, resetView } from './redux/actions'

// DATA
import Model from './model'

import { columnHeader } from './settings'

// Components
import Filter from './filter'
import Menu   from './menu'
import Table  from './table'
import ColumnVisibility  from './columnVisibility'
import Header from './header'

//utils
import { inc, dec, stackLoader, loaderDisplay } from './utils'

export default {
  controller: props => {
    //TODO: LANGUAGE!!!
    //TODO: LOGIN and CREDENTIALS
    let c = {
      files:        m.prop( List([]) ),
      category:     m.prop( [] ),
      columnHeader: m.prop( columnHeader ),
      store:        props.store,
    }
    //<ColumnVisibility columnHeader={ c.columnHeader } />
    /*
     <Menu category={c.category}
     menuFilter={c.menuFilter}
     store={c.store}/>
    * */
    return c
  },

  view: c => (
      <div>
        <Model
            columnHeader={columnHeader}
            store={c.store}
            files={c.files}
            category={c.category}/>
        <Header />
        <h1>TRANSFER</h1>
        <p>
          <a href='/login' config={ m.route }>LOGIN</a>
        </p>
        <Filter store={c.store} />
        <Menu category={c.category}
              store={c.store}/>
        { ( c.files().size > 0)
            ? <Table store={c.store}/>
            : ''
        }
      </div>
  ),
}
