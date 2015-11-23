import { fromJS as toImmutable } from 'immutable'
import { defaults } from '../../settings'

export const sort = (columns, id) => (a, b) => {
  const _id = columns.getIn( [ id, 'sorted' ] ) ? id : defaults.index
  return columns.getIn( [ _id, 'order' ] )
      ? ( b.get( _id ) < a.get( _id ) ? -1 : 1 )
      : ( a.get( _id ) < b.get( _id ) ? -1 : 1 )
}

export const sortColumn = (state, id) => {
  let col = state.columns.get( id ).toJS()
  if ( !col.sorted && !col.order ) {
    col.sorted = !col.sorted      ///* toggle sorted */
  } else if ( col.sorted && !col.order ) {
    col.order = !col.order        ///* toggle order */
  } else if ( col.sorted && col.order ) {
    col.sorted = !col.sorted      ///* toggle both sorted and order */
    col.order = !col.order
  } else {
    /* Should not reach here !! */
    throw new Error( 'ERROR: Inconsistent state in updateColSorted. ColId = ' + id )
  }
  // reset other columns and update the selected one
  return state.columns.map( x =>
      x.get( 'id' ) !== id
          ? x = x.withMutations( map =>
          map.set( 'sorted', defaults.col.sorted )
              .set( 'order', defaults.col.order ) )
          : toImmutable( col ) )
}
