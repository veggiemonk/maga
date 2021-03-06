import { compose, createStore, applyMiddleware } from 'redux';

const thunkMiddleware = ( { dispatch, getState } ) => {
  return next => action =>
    typeof action === 'function' ?
      action( dispatch, getState ) :
      next( action );
};

/*const putTimestamp = ( { dispatch } ) => {
  return (action) => {
    action.receivedAt = Date.now()
    dispatch(action)
  }
}*/

const finalCreateStore = compose(
  applyMiddleware( thunkMiddleware ),
  typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
)( createStore );

export default finalCreateStore;
