import m from 'mithril'
import 'fetch'
import { fromJS as toImmutable } from 'immutable'

// ActionCreators
import { loadData, resetView } from './redux/actions'

// DATA
import Model from './model'

// Columns settings
import { columnHeader } from './settings'

import Body from './Body'

export default {
  controller: props => {
    //TODO: LANGUAGE!!!
    //TODO: LOGIN and CREDENTIALS
    let c = {
      files:        m.prop( toImmutable([]) ),
      category:     m.prop( toImmutable([]) ),
      columnHeader: m.prop( columnHeader ),
      store:        props.store,
    }
    return c
  },

  view: c => {
    return (  
      <div>
        <Model
          columnHeader={columnHeader}
          store={c.store}
          files={c.files}
          category={c.category} >
        </Model>
        <Body store={c.store} />

      </div>
      )
  },
}
