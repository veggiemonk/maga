import _ from 'lodash'
import { defaults } from '../../settings'

const toggleSort = col => {
  let c = _.clone(col)
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
  const _c = _.find( columns, 'sorted')
  return _c ? _c[ 'id' ] : defaults.index
}

export const sortColumn = ( columns, id ) => {
  return _(columns).map(x =>
    x['id'] !== id
      ? Object.assign({}, x, {
      sorted: defaults.col.sorted,
      order: defaults.col.order
    })
      : toggleSort(_.find( columns, { id })))
  .value()
}

export const resetSort = columns => {
  return _(columns).map(x => _.assign({}, x, {
    sorted: defaults.col.sorted,
    order: defaults.col.order
  })).value()

}


