import m from 'mithril'
import { fromJS as toImmutable } from 'immutable'

import { fetching } from './async'

// Components
import Main from './components/Main/index'
import Aside   from './components/Aside/index'


let App        = {}
App.controller = props => {
  //TODO: LANGUAGE!!!
  //TODO: LOGIN and CREDENTIALS
  let c = {}
  //console.log('fetching, dispatch = ', props.dispatch)
  fetching( props.store.dispatch ).then( ()=> { console.log( 'LOADED...' )} )

  return c
}

App.view = ( c, props ) => {

  const state = props.store.getState()
  return (
    <div>
      <Aside dispatch={props.store.dispatch} {...state}/>
      <Main dispatch={props.store.dispatch} {...state}/>
    </div>
  )
}
//App = connect((state) => state)(App)
export default App
