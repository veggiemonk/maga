import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

const finalCreateStore = compose(
  applyMiddleware( thunkMiddleware/*, loggerMiddleware*/ ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)( createStore )

export default finalCreateStore
