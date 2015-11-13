import { Map } from 'immutable'
import { visibleColumn } from './settings'

export let historyIndex = 0
export let history      = []
export let actions      = ['Initial State']

let initialState = Map([visibleColumn])

export const hasUndo   = () => historyIndex !== 0
export const hasRedo   = () => historyIndex < history.length - 1

export const operation = (state = initialState, action) => {

  // eliminate the future if it is for the user, not for the dev! <= TODO
  history = history.slice( 0, historyIndex + 1 )

  // create a new version by applying an operation to the head
  history.push( state )
  actions.push( action )
  historyIndex += 1
  console.log( 'history:', history, 'actions', actions, 'index:', historyIndex )
}

export default { historyIndex, history, actions, hasUndo, hasRedo, operation }
/*
 *
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
 *
 * */
