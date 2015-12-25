import _ from 'lodash'
import { defaults } from '../../settings'

export const sort = ( columns, id ) => ( a, b ) => {
  const _id = _(columns).get( [ id, 'sorted' ] ) ? id : defaults.index
  return _(columns).get( [ _id, 'order' ] )
    ? ( b[ _id ] < a[ _id ] ? -1 : 1 )
    : ( a[ _id ] < b[ _id ] ? -1 : 1 )
}

const toggleSort = col => {
  let c = col
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
  return c
}

export const toggleColView = (columns, id) => {
  let col = _.clone(columns, true)
  const i = _(col).findIndex({ id })
  col[i]['visible'] = !col[i]['visible']
  return col
}

export const getSortedColumn = columns => {
  const _c = _(columns).find( c => c[ 'sorted' ] )
  return _c ? _c[ 'id' ] : defaults.index
}

export const sortColumn = ( state, id ) => {
  return _(state.columns).map(x =>
    x['id'] !== id
      ? _.assign({}, x, {
      sorted: defaults.col.sorted,
      order: defaults.col.order
    })
      : toggleSort(_(state.columns).get(id)))
}

export const resetSort = columns => {
  return _(columns).map(x => _.assign({}, x, {
    sorted: defaults.col.sorted,
    order: defaults.col.order
  })).value()

}


