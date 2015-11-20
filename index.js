import m from 'mithril'
import app from './app/index'
import finalCreateStore from './app/createStore'
import reducer from './app/reducers/index'

let store = finalCreateStore( reducer )
store.subscribe(m.redraw.bind(m))

/**** DevTools ****/
import React from 'react'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

React.render(
  <DebugPanel top right bottom>
    <DevTools store={store} monitor={LogMonitor} />
  </DebugPanel>, document.getElementById('devtools')
)
/**** DevTools ****/

m.mount(document.getElementById('app'), 
          m.component(app, {store: store}) )
