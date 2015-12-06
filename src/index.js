import m from 'mithril'
import { fromJS as toImmutable } from 'immutable'

import { connect, Provider } from './redux/mithril-redux'
import { loadData, resetView } from './redux/actions'
import Model from './components/Model/index' // DATA
import Body from './components/Body/index'
import Header from './components/Header/index'
import { columnHeader } from './settings'



let App        = {}
App.controller = props => {
  //TODO: LANGUAGE!!!
  //TODO: LOGIN and CREDENTIALS
  let c = {
    files:        m.prop( toImmutable( [] ) ),
    category:     m.prop( toImmutable( [] ) ),
    columnHeader: m.prop( columnHeader ),
    //store:        props.store,
  }
  return c
}

App.view = (c, props) => {
  return (
    <div>
      <Model {...props}/>
      <Header {...props}/>
      <Body {...props}/>
    </div>
  )
}

const AppInstance = connect((state) => state)(App)

export default AppInstance
