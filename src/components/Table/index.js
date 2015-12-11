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
//TODO: move it elsewhere!!!
import styles from './index.css!'

let Table = {}

Table.controller = function controller( props ) {
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

Table.view = function view( c, props ) {
  const { dispatch, display, data, columns, filters } = props
  return (
    <div class={styles.main_div} style={`display : ${display ? 'block' : 'none'};`}>
      <table class={styles.collapse}>
        <thead>{
          columns
            .toList()
            .sortBy( x => x.get( 'index' ) )
            .filter( x => x.get( 'visible' ) )
            .map( col =>
              <th
                class={styles.row_width}
                key={ col.get('id') }
                onclick={() => { dispatch( sortColumn( col.get( 'id' ) ) ) } }>
                { m.trust( col.get( 'name' ) ) }
                { c.vm.cssSortToggle( columns.get( col.get( 'id' ) ).toJS() ) }
              </th> ).toJS()
        }</thead>
        <tbody>{
          data
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
    </div>
  )
}

export default Table
