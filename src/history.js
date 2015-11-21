import { Map } from 'immutable'

export let historyIndex = 0
export let history      = []
export let actions      = ['Initial State']

export const hasUndo   = () => historyIndex !== 0
export const hasRedo   = () => historyIndex < history.length - 1

export const operation = (state = ['Initial State'], action) => {

  // eliminate the future
  // (if it is for the user, not for the dev! <= TODO)
  history = history.slice( 0, historyIndex + 1 )

  // create a new version by applying an operation to the head
  history.push( state )
  actions.push( action )
  historyIndex += 1
  console.log( 'history:', history, 'actions', actions, 'index:', historyIndex )
}

export default { historyIndex, history, actions, hasUndo, hasRedo, operation }

/*
 actions:          [],
 history:          m.prop( [] ),
 indexPresent:     m.prop( -1 ),
 operation:        (state = [], action) => {
 // eliminate the future
 c.history( c.history().slice( 0, c.indexPresent() + 1 ) )
 c.actions = c.actions.slice( 0, c.indexPresent() + 1 )
 // create a new version by applying an operation to the head
 fpush( c.history, c.indexPresent, state )
 c.actions.push( action )
 //console.log( 'history:', c.history(), 'actions:', c.actions, 'index:', c.indexPresent() )
 },
 hasUndo:          () => c.indexPresent() > 0,
 hasRedo:          () => c.indexPresent() < c.history().length - 1,
 undo:             () => {
 if ( c.hasUndo() ) {
 c.columnHeader( c.history()[dec( c.indexPresent )] )
 c.checkSorting()
 }
 },
 redo:             () => {
 if ( c.hasRedo() ) {
 c.columnHeader( c.history()[inc( c.indexPresent )] )
 c.checkSorting()
 }
 },
* */

/*** REDUX ***/
/*
 * import {
 ACTIVATE_LOCATION
 } from './actions';

 import Immutable from 'immutable';

 let initialState = Immutable.Map([]);

 export let ui = (state = initialState, action) => {
 switch (action.type) {
 case ACTIVATE_LOCATION:
 state = state.set('activeLocationId', action.id);
 break;
 }

 return state;
 };
  * */
