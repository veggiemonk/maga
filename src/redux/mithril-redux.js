import m from 'mithril'

let _Provider  = {}
_Provider.view = (controller, props, children) => {
  const {store} = props
  const Child = typeof children[ 0 ] === 'function'
    ? children[ 0 ]()
    : children[ 0 ]

  return (<Child {...store} />)
}

export const Provider = _Provider

export const connect = selector => Container => {
  return {
    view: (controller, props, children) => {
      const {dispatch, getState} = props
      const state = selector( getState() )

      return (<Container dispatch={dispatch} {...state} />)
    },
  }
}

