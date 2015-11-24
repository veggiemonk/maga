import { fromJS as toImmutable } from 'immutable'
import { defaults } from '../../settings'

export const sort = (columns, id) => (a, b) => {
  const _id = columns.getIn( [ id, 'sorted' ] ) ? id : defaults.index
  return columns.getIn( [ _id, 'order' ] )
      ? ( b.get( _id ) < a.get( _id ) ? -1 : 1 )
      : ( a.get( _id ) < b.get( _id ) ? -1 : 1 )
}

const toggleSort = col => {
  let c = col.toJS()
  if ( !c.sorted && !c.order ) {
    c.sorted = !c.sorted      ///* toggle sorted */
  } else if ( c.sorted && !c.order ) {
    c.order = !c.order        ///* toggle order */
  } else if ( c.sorted && c.order ) {
    c.sorted = !c.sorted      ///* toggle both sorted and order */
    c.order = !c.order
  } else {
    /* Should not reach here !! */
    throw new Error( 'ERROR: Inconsistent state in updateColSorted. ColId = ' + col.id )
  }
  return toImmutable( c )
}
/*
 if ( model.configCol().get( key ).sortable ) {
 model.updateColSorted( key );                 // toggle sort
 model.startPageAt( defaults.startPageAt );    // reset view
 model.page( defaults.page );                  // reset page
 model.data( model.seqSort( key ).toArray() ); // sort data
 }
 */

export const getSortedColumn = columns => {
  const _c = columns.toList().filter( c => c.get( 'sorted' ) )
  return _c.count() > 0
      ? _c.first().get( 'id' )
      : defaults.index
}

export const resetSort = columns => {
  return columns.map( x => x.withMutations( map =>
      map.set( 'sorted', defaults.col.sorted )
          .set( 'order', defaults.col.order ) ) )
}

export const sortColumn = (state, id) => (
    state.columns.map( x =>
        x.get( 'id' ) !== id
            ? x = x.withMutations( map =>
            map.set( 'sorted', defaults.col.sorted )
                .set( 'order', defaults.col.order ) )
            : x = toggleSort( state.columns.get( id ) ) )
)

