import m from 'mithril'
import app from 'src/index'
import finalCreateStore from 'src/createStore'
import reducer from 'src/reducers/index'

let store = finalCreateStore( reducer )
store.subscribe(m.redraw.bind(m))

/**** DevTools ****/
import React from 'react'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import { TestMonitor } from 'redux-devtools-gentest-plugin'

const view = test => {
  if (test) {
    return (
      <div>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>
        <DebugPanel top left bottom>
        <DevTools store={store}
                  monitor={TestMonitor}/>
        </DebugPanel>
      </div>
    )
  } else {
    return (
      <DebugPanel top right bottom>
        <DevTools store={store}
                  monitor={LogMonitor} />
      </DebugPanel>
    )
  }
}

React.render( view( JSON.parse( sessionStorage.test || false ) ), document.getElementById('devtools') )
/**** DevTools ****/

m.mount(document.getElementById('app'),
          m.component(app, {store: store}) )
