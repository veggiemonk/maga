import m from 'mithril'
import _ from 'lodash'

let _Provider  = {}
_Provider.view = (controller, props, children) => {
  const {store} = props
  //const {dispatch, getState} = store
  const Child = typeof children[ 0 ] === 'function'
    ? children[ 0 ]()
    : children[ 0 ]

  return (<Child store={store} />)
}
export const Provider = _Provider

export const connect = (selector) => Wrapper => {
  return {
    view: (controller, props, children) => {
      const {store} = props
      const state = selector( store.getState() )

      return (<Wrapper dispatch={store.dispatch} {...state} />)
    },
  }
}
//<Child dispatch={dispatch} {...getState()} />
let Container = {}
const view = (controller, props, children) => {
  const {store} = props
  const {dispatch, getState} = store

  return (
    <div>{
      _(children).map( child => ( typeof child === 'function' ? child() : child  ) )
    }</div>
    )
}
/* to test
comp.view = function(c, props, children) {
  return (<div>
    <span bla="test1">test1</span>
    <span bla="test2">test2</span>
    <span bla="test3">test3</span>
  </div>)
*/
