import m from 'mithril'
import 'fetch'
import { fromJS as toImmutable } from 'immutable'

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

export default {
  controller: props => {
    //TODO: LANGUAGE!!!
    //TODO: LOGIN and CREDENTIALS
    let c = {
      files:        m.prop( toImmutable([]) ),
      category:     m.prop( [] ),
      columnHeader: m.prop( columnHeader ),
      store:        props.store,
    }
    //<Header />
    return c
  },

  view: c => {

    const { filters } = c.store.getState()
    return (  
      <div>
        <Model
            columnHeader={columnHeader}
            store={c.store}
            files={c.files}
            category={c.category}/>
 
        <Header />
        {
          filters.menuColumnView ? <ColumnVisibility store={c.store} /> : ''
        }
        <Filter store={c.store} />

        <Menu category={c.category} store={c.store}/>
        { 
          c.files().size > 0
            ? <Table store={c.store}/>
            : 'Table not loaded yet'
        }
      </div>
      )
  },
}
