import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { devTools, persistState } from 'redux-devtools'

const loggerMiddleware = createLogger()

const finalCreateStore = compose(
  applyMiddleware( thunkMiddleware, loggerMiddleware  ),
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

export default finalCreateStore
