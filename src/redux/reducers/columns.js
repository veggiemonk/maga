import { Map, fromJS as toImmutable } from 'immutable'
import { defaults } from '../../settings'

import { LOAD_DATA, SORT_COLUMN, TOGGLE_COLUMN_VIEW } from '../actions'

export default (state = Map({id: 'index'}), action) => {

  switch ( action.type ) {
    case LOAD_DATA:
      return  action.columnHeader
    case TOGGLE_COLUMN_VIEW:
      return state.setIn( [ action.id, 'visible' ], !state.getIn( [ action.id, 'visible' ] ) )
    case SORT_COLUMN:

      /* TODO
      if ( model.configCol().get( key ).sortable ) {
        model.startPageAt( defaults.startPageAt );    // reset view
        model.page( defaults.page );                  // reset page
        model.data( model.seqSort( key ).toArray() ); // sort data
      }*/

      let col = state.get( action.id ).toJS()
      if ( !col.sorted && !col.order ) {
        col.sorted = !col.sorted      ///* toggle sorted */
      } else if ( col.sorted && !col.order ) {
        col.order = !col.order        ///* toggle order */
      } else if ( col.sorted && col.order ) {
        col.sorted = !col.sorted      ///* toggle both sorted and order */
        col.order = !col.order
      } else {
        /* Should not reach here !! */
        throw new Error( 'ERROR: Inconsistent state in updateColSorted. ColId = ' + action.id )
      }
      // reset other columns and update the selected one
      return state.map( x =>
          x.get( 'id' ) !== action.id
              ? x = x.withMutations( map =>
                  map.set( 'sorted', defaults.col.sorted )
                    .set( 'order', defaults.col.order ) )
              : toImmutable( col ) )
    // return Object.assign( {}, state, { text: action.text } )
    default:
      return state
  }
}
