import { fromJS as toImmutable } from 'immutable'

import { defaults } from '../../settings'
import { sortColumn, sort, resetSort, getSortedColumn } from './columns'
import { filtering } from './filters'
import {
    FILTER_DATE_BEGIN,
    FILTER_DATE_END,
    FILTER_MENU_REF,
    FILTER_MENU_CAT,
    FILTER_SEARCH,
    PAGE_NEXT,
    PAGE_PREV,
    PAGE_FIRST,
    PAGE_LAST,
    CHANGE_ROW_DISPLAYED,
    TOGGLE_SELECT_ALL,
    SELECT_ROW,
    LOAD_DATA,
    SORT_COLUMN,
    TOGGLE_COLUMN_VIEW,
    RESET_VIEW,
} from '../actions'

const initialState = {
  columns: toImmutable( [['col1',{col1: 'fake data'}]] ),
  filters: {
    startPageAt:   defaults.startPageAt,
    page:          defaults.page,
    rowDisplayed:  defaults.rowDisplay,
    dateBegin:     defaults.dateBegin,
    dateEnd:       defaults.dateEnd,
    menuFilter:    defaults.menuFilter,
    searchKeyword: defaults.searchKeyword,
  },
  files:   toImmutable( [] ),
  data:    toImmutable( [] )
}

const rootReducer = (state = initialState, action) => {

  const rd = Number(state.filters.rowDisplayed)
  const sa = Number(state.filters.startPageAt)

  switch ( action.type ) {
    case LOAD_DATA:
      return Object.assign( {}, state, {
        columns:  action.columnHeader,
        files:    action.files,
        data:     action.data,
        category: action.category,
      } )

    case RESET_VIEW:
      return filtering( Object.assign( {}, state, {
        columns: resetSort( state.columns ),
        filters: {
          startPageAt:   defaults.startPageAt,
          page:          defaults.page,
          rowDisplayed:  defaults.rowDisplay,
          dateBegin:     defaults.dateBegin,
          dateEnd:       defaults.dateEnd,
          menuFilter:    defaults.menuFilter,
          searchKeyword: defaults.searchKeyword,
        }
      } ) )

    case TOGGLE_COLUMN_VIEW:
      return Object.assign( {}, state, {
        columns: state.columns.setIn( [ action.id, 'visible' ], !state.columns.getIn( [ action.id, 'visible' ] ) )
      } )

    case SORT_COLUMN:
      if ( state.columns.getIn( [ action.id, 'sortable' ] ) ) {
        //let newColumns = sortColumn( state, action.id )
        return Object.assign( {}, state, {
          columns: sortColumn( state, action.id ),
        } )
      } else {
        return state
      }

    case FILTER_DATE_BEGIN:
      return filtering( Object.assign( {}, state, {
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, { dateBegin: action.date } )
      } ) )

    case FILTER_DATE_END:
      return filtering( Object.assign( {}, state, {
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, { dateEnd: action.date } )
      } ) )

    case FILTER_MENU_REF:
      return filtering( Object.assign( {}, state, {
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, { menuFilter: { cat: defaults.cat, ref: action.ref } } )
      } ) )

    case FILTER_MENU_CAT:
      return filtering( Object.assign( {}, state, {
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, { menuFilter: { cat: action.cat, ref: defaults.ref } } )
      } ) )

    case FILTER_SEARCH:
      return filtering( Object.assign( {}, state, {
        columns: resetSort( state.columns ),
        filters: Object.assign({}, state.filters, { searchKeyword: action.search } )
      } ) )

    case PAGE_NEXT:
      if ( action.filesTotal > sa + rd ) {
        return filtering( Object.assign( {}, state, {
          filters: Object.assign( {}, state.filters, { page: state.filters.page + 1, startPageAt: sa + rd } ),
          data:    state.data.sort( sort( state.columns, getSortedColumn( state.columns ) ) ),
        } ) )
      } else {
        return state
      }

    case PAGE_PREV:
      if ( sa - rd >= 0 ) {
        return filtering( Object.assign( {}, state, {
          filters: Object.assign( {}, state.filters, { page: state.filters.page - 1, startPageAt: sa - rd } ),
          data:    state.data.sort( sort( state.columns, getSortedColumn( state.columns ) ) ),
        } ) )
      } else {
        return state
      }

    case PAGE_FIRST:
      return Object.assign( {}, state, {
        filters: Object.assign( {}, state.filters, { page: defaults.page, startPageAt: defaults.startPageAt } ),
        data:    state.data.sort( sort( state.columns, getSortedColumn( state.columns ) ) ),
      } )

    case PAGE_LAST:
      return Object.assign( {}, state, {
        filters: Object.assign( {}, state.filters, {
          page:        Math.ceil( state.data.count() / state.filters.rowDisplayed ),
          startPageAt: ( (Math.ceil( state.data.count() / state.filters.rowDisplayed ) - 1) * state.filters.rowDisplayed ),
        } ),
        data:    state.data.sort( sort( state.columns, getSortedColumn( state.columns ) ) ),
      } )
    case CHANGE_ROW_DISPLAYED:
      return  Object.assign( {}, state, {
        filters: Object.assign({}, state.filters, { rowDisplayed: action.num } )
      } )

    default:
      return state
  }
}

export default rootReducer
