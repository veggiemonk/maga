import m from 'mithril'
import Immutable from 'immutable'
import Row from './../Row/index'

import {
  sortColumn, toggleColumnView,
  filterDateBegin, filterDateEnd, filterMenuCat, filterMenuRef, filterSearch
} from './../../redux/actions'
import { sort, getSortedColumn } from './../../redux/reducers/columns'

import { invalidate, inc, dec } from './../../utils'
import { defaults } from './../../settings'

import styles from './index.css!'

let Table = {}

Table.controller = function controller(props) {
  let c = {
    /* toggleVisibility: colId => {
     dispatch( toggleColumnView( colId ) )
     },*/
    vm: {
      /***
       * show the 3 states of a column sortwise
       * @param: id  id of the column
       * @returns: JSX object
       **/
      cssSortToggle: col => {
        //let col = columns.get( colId ).toJS()
        if ( col && col.sortable ) {
          return !col.sorted
            ? ( <i class='fa fa-sort right'></i> )
            : ( col.order
            ? ( <i class='fa fa-sort-desc right'></i> )
            : ( <i class='fa fa-sort-asc right'></i>  ) )
        }
      }
    },
  }
  return c
}

Table.view = function view(c, props) {
  const { dispatch, display, data, columns, filters } = props
  return (<div /*class={styles.main_div}*/ style={`display : ${display ? 'inline-block' : 'none'};`}>
    <table class={styles.collapse}>
      <thead>{
        columns
          .toList()
          .sortBy( x => x[ 'index' ] )
          .filter( x => x[ 'visible' ] )
          .map( col =>
            <th
              class={styles.row_width}
              key={ col[ 'id' ] }
              onclick={() => { dispatch( sortColumn( col[ 'id' ] ) ) } }>
              { m.trust( col[ 'name' ] ) }
              { c.vm.cssSortToggle( columns[ col[ 'id' ] ] ) }
            </th> ).toJS()
      }</thead>
      <tbody>{ data
        .sort( sort( columns, getSortedColumn( columns ) ) )
        .skip( filters.startPageAt )
        .take( filters.rowDisplayed )
        .map( file => (
          <Row
            key={ file.get('index') }
            file={ file }
            dispatch={ dispatch }
            {...props}>
          </Row> ) ).toJS()
      }</tbody>
    </table>
  </div>)
}

export default Table
