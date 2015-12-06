import m from 'mithril'
import 'isomorphic-fetch'
import { fromJS as toImmutable } from 'immutable'

// ActionCreators
import { loadData, resetView } from './redux/actions'

// DATA
import Model from './Model'

// Components
import Body from './Body'
import Header from './components/Header/index'

// Columns settings
import { columnHeader } from './settings'

export default {
  controller: props => {
    //TODO: LANGUAGE!!!
    //TODO: LOGIN and CREDENTIALS
    let c = {
      files:        m.prop( toImmutable( [] ) ),
      category:     m.prop( toImmutable( [] ) ),
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
          category={c.category}>
        </Model>
        <Header />
        <Body store={c.store}/>

      </div>
    )
  },
}
