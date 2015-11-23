//TODO import actions

const initialState = [
  {
    text:      'Use Redux',
    type:      'TEXT_CHANGE',
    completed: false,
    id:        0
  }
]

export default ( state = {}, action ) => {

  switch ( action.type ) {
    case 'TEXT_CHANGE':
      return Object.assign( {}, state, { text: action.text } )

    default:
      return state
  }
}
