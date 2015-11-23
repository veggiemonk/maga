/*import { combineReducers } from 'redux'
 import columns from './columns'
 import filters from './filters'

 const rootReducer = combineReducers({
 columns,
 filters,
 })*/

import { Map, List, fromJS as toImmutable } from 'immutable'

import { defaults } from '../../settings'
import { sortColumn } from './columns'

import {
    FILTER_DATE_BEGIN,
    FILTER_DATE_END,
    FILTER_MENU_REF,
    FILTER_MENU_CAT,
    FILTER_SEARCH,
    PAGE_NEXT,
    PAGE_PREV,
    CHANGE_ROW_DISPLAYED,
    TOGGLE_SELECT_ALL,
    SELECT_ROW,
    LOAD_DATA,
    SORT_COLUMN,
    TOGGLE_COLUMN_VIEW,
    RESET_VIEW,
} from '../actions'

const initialState = {
  columns: Map({}),
  filters: {
    startPageAt: defaults.startPageAt,
    page: defaults.page,
    rowDisplayed: defaults.rowDisplay,
  },
  files: List([]),
  data: List([])
}

const rootReducer = (state = initialState, action) => {

  let rd = state.filters.rowDisplayed
  let sa = state.filters.startPageAt

  switch ( action.type ) {
    case RESET_VIEW:
      return Object.assign( {}, state, {
        filters: {
          startPageAt: defaults.startPageAt,
          page: defaults.page,
          rowDisplayed: defaults.rowDisplay,
        }
      } )
    case LOAD_DATA:
      return Object.assign( {}, state, {
        columns: action.columnHeader,
        files: action.files,
        data: action.data,
      } )
    case TOGGLE_COLUMN_VIEW:
      return Object.assign( {}, state, {
            columns: state.columns.setIn( [ action.id, 'visible' ], !state.columns.getIn( [ action.id, 'visible' ] ) )
          } )
    case SORT_COLUMN:
      if ( state.columns.getIn( [ action.id, 'sortable'] ) ) {
        let newColumns = sortColumn(state, action.id )
        const sorting = (a, b) => {
          return newColumns.getIn( [ action.id, 'order' ] )
              ? ( b.get( action.id ) < a.get( action.id ) ? -1 : 1 )
              : ( a.get( action.id ) < b.get( action.id ) ? -1 : 1 )
        }
        return Object.assign( {}, state, {
          columns: newColumns,
          filters: state.filters,
          data: state.files.sort(sorting)
        } )
      } else {
        return state
      }
    case FILTER_DATE_BEGIN:
      return Object.assign( {}, state, { filters: { dateBegin: action.date } } )
    case FILTER_DATE_END:
      return Object.assign( {}, state, { filters: { dateEnd: action.date } } )
    case FILTER_MENU_REF:
      return Object.assign( {}, state, { filters: { menuFilter: { ref: action.ref } } } )
    case FILTER_MENU_CAT:
      return Object.assign( {}, state, { filters: { menuFilter: { cat: action.cat } } } )
    case FILTER_SEARCH:
      return Object.assign( {}, state, { filters: { searchKeyword: action.search } } )
    case PAGE_NEXT:
      if ( action.filesTotal > sa + rd ) {
        return Object.assign( {}, state, {
          filters: {
            page:        state.filters.page + 1,
            startPageAt: sa + rd,
            rowDisplayed : state.filters.rowDisplayed
          }
        } )
      } else {
        return state
      }
    case PAGE_PREV:
      if ( sa - rd >= 0 ) {
        return Object.assign( {}, state, {
          filters: {
            page:        state.filters.page - 1,
            startPageAt: sa - rd,
            rowDisplayed : state.filters.rowDisplayed
          }
        } )
      } else {
        return state
      }
    default:
      return state
  }
}

export default rootReducer
