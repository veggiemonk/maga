import m from 'mithril'
import { fromJS as toImmutable } from 'immutable'

import { fetching } from './async'
import Body from './components/Body/index'
import Header from './components/Header/index'

let App        = {}
App.controller = props => {
  //TODO: LANGUAGE!!!
  //TODO: LOGIN and CREDENTIALS
  let c = {}
  //console.log('fetching, dispatch = ', props.dispatch)
  fetching( props.store.dispatch ).then( ()=> { console.log( 'LOADED...' )} )

  return c
}
//{...props}
App.view = (c, props) => {
  //const Body   = connect(((state)=> state), 'Body in App')(body)
  //const Header = connect(((state)=> state), 'Header in App')(header)
  const state = props.store.getState()
  return (
    <div>
      <Header />
      <Body dispatch={props.store.dispatch} {...state}/>
    </div>
  )
}
//App = connect((state) => state)(App)
export default App
