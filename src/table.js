import m from 'mithril'
import immutable from 'immutable'
import Row from './row'

import {
    sortColumn, toggleColumnView,
    filterDateBegin, filterDateEnd, filterMenuCat, filterMenuRef, filterSearch
} from './redux/actions'
import { sort, getSortedColumn } from './redux/reducers/columns'

import { invalidate, inc, dec, fpush, searchInObject } from './utils'
import { defaults } from './settings'
//TODO: move it elsewhere!!!
import styles from './css/table.css!'

let Table = {}

Table.controller = function controller(props) {
  let c = {
    store:            props.store,
    files:            props.files,
    columnHeader:     props.columnHeader,
    toggleVisibility: colId => {
      c.store.dispatch( toggleColumnView( colId ) )
    },
    vm:               {
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

Table.view = function view(c) {
  const state = c.store.getState()
  return (
      <div class={styles.main_div}>
        <table class={styles.scroll}>
          <thead>
          {
            state.columns
                .toList()
                .sortBy( x => x.get( 'index' ) )
                .filter( x => x.get( 'visible' ) )
                .map( col =>
                    <th
                        class={styles.row_width}
                        key={ col.get('id') }
                        onclick={() => { c.store.dispatch( sortColumn( col.get( 'id' ) ) ) } }>
                      { m.trust( col.get( 'name' ) ) }
                      { c.vm.cssSortToggle( state.columns.get( col.get( 'id' ) ).toJS() ) }
                    </th> ).toJS()
          }
          </thead>
          <tbody>
          {
            state.data
                .sort( sort( state.columns, getSortedColumn( state.columns ) ) )
                .skip( state.filters.startPageAt )
                .take( state.filters.rowDisplayed )
                .map( file => (
                    <Row
                        key={ file.get('index') }
                        file={ file }
                        store={ c.store }>
                    </Row> ) ).toJS()
          }
          </tbody>
        </table>
      </div>
  )
}

export default Table
