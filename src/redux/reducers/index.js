import _ from 'lodash'
import { defaults, initialState } from '../../settings'
import {
  sortColumn,
  sort,
  resetSort,
  getSortedColumn,
  toggleColView } from './columns'
import { filtering } from './filters'
import { validateDate } from './../../utils'
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
  TOGGLE_SELECT_ROW,
  FETCH_DATA_SUCCESS,
  FETCH_DATA,
  SORT_COLUMN,
  TOGGLE_COLUMN_VIEW,
  RESET_VIEW,
  TOGGLE_MENU_COLUMN_VIEW,
  SHOW_ALL_DOCUMENT,
  SET_LANGUAGE,
  SET_USERNAME,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions'

const rootReducer = ( state = initialState, action ) => {

  const rd = state.filters.rowDisplayed
  const sa = state.filters.startPageAt

  switch ( action.type ) {
    case FETCH_DATA_SUCCESS:
      return filtering( Object.assign( {}, state, {
        columns:     action.columns,
        files:       action.files,
        data:        action.data,
        category:    action.category,
        isFetching:  false,
        lastUpdated: action.receivedAt || Date.now(),
      } ) )

    case FETCH_DATA:
      return Object.assign( {}, state, {
        isFetching: true,
        lastUpdated: action.receivedAt || Date.now(),
      } )

    case TOGGLE_SELECT_ROW:
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        selectedRow: _.contains( state.selectedRow, action.row )
                       ? _.without( state.selectedRow, action.row ) // remove selected row
                       : [ ...state.selectedRow, action.row ]   // add selected row
      } )

    case RESET_VIEW:
      return filtering( Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        columns: resetSort( state.columns ),
        filters: {
          startPageAt:    defaults.startPageAt,
          page:           defaults.page,
          rowDisplayed:   defaults.rowDisplayed,
          dateBegin:      defaults.dateBegin,
          dateEnd:        defaults.dateEnd,
          menuFilter:     defaults.menuFilter,
          searchKeyword:  defaults.searchKeyword,
          menuColumnView: defaults.menuColumnView,
        }
      } ) )

    case SHOW_ALL_DOCUMENT:
      return filtering( Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, {
          startPageAt: defaults.startPageAt,
          page:        defaults.page,
          menuFilter:  defaults.menuFilter,
        } )
      } ) )

    case TOGGLE_COLUMN_VIEW:
      return filtering( Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        columns: toggleColView( state.columns, action.id )
      } ) )

    case TOGGLE_MENU_COLUMN_VIEW:
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        filters: Object.assign( {}, state.filters, {
          page:           defaults.page,
          startPageAt:    defaults.startPageAt,
          menuColumnView: !state.filters.menuColumnView,
        } )
      } )

    case SORT_COLUMN:
      if ( _.result( _.find( state.columns, { id: action.id } ), 'sortable' ) ) {
        return Object.assign( {}, state, {
          lastUpdated: action.receivedAt || Date.now(),
          columns: sortColumn( state.columns, action.id ),
        } )
      } else {
        return state
      }

    case FILTER_DATE_BEGIN:
      const dateB = validateDate(action.date)
      return dateB || action.date === '' ? filtering( Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, {
          page:        defaults.page,
          startPageAt: defaults.startPageAt,
          dateBegin:   action.date !== '' ? dateB.format( defaults.dateFormat ).toString() : '',
        } )
      } ) )
        : state

    case FILTER_DATE_END:
      const dateE = validateDate(action.date)
      return dateE || action.date === '' ? filtering( Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, {
          page:        defaults.page,
          startPageAt: defaults.startPageAt,
          dateEnd:     action.date !== '' ? dateE.format( defaults.dateFormat ).toString() : '',
        } )
      } ) )
        : state

    case FILTER_MENU_REF:
      return filtering( Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, {
          page:        defaults.page,
          startPageAt: defaults.startPageAt,
          menuFilter:  { cat: defaults.cat, ref: action.ref },
        } )
      } ) )

    case FILTER_MENU_CAT:
      return filtering( Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        columns: resetSort( state.columns ),
        filters: Object.assign( {}, state.filters, {
          page:        defaults.page,
          startPageAt: defaults.startPageAt,
          menuFilter:  { cat: action.cat, ref: defaults.ref },
        } )
      } ) )

    case FILTER_SEARCH:
      return filtering( Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        columns: resetSort( state.columns ),
        //every time it filters, reset page and startPageAt
        filters: Object.assign( {}, state.filters, {
          page:          defaults.page,
          startPageAt:   defaults.startPageAt,
          searchKeyword: action.search,
        } )
      } ) )

    case PAGE_NEXT:
      if ( action.filesTotal > sa + rd ) {
        return filtering( Object.assign( {}, state, {
          lastUpdated: action.receivedAt || Date.now(),
          filters: Object.assign( {}, state.filters, { page: state.filters.page + 1, startPageAt: sa + rd } ),
          data:    _( state.data ).sortBy( sort( state.columns, getSortedColumn( state.columns ) ) ).value(),
        } ) )
      } else {
        return state
      }

    case PAGE_PREV:
      if ( sa - rd >= 0 ) {
        return filtering( Object.assign( {}, state, {
          lastUpdated: action.receivedAt || Date.now(),
          filters: Object.assign( {}, state.filters, { page: state.filters.page - 1, startPageAt: sa - rd } ),
          data:    _( state.data ).sortBy( sort( state.columns, getSortedColumn( state.columns ) ) ).value(),
        } ) )
      } else {
        return state
      }

    case PAGE_FIRST:
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        filters: Object.assign( {}, state.filters, { page: defaults.page, startPageAt: defaults.startPageAt } ),
        data:    _( state.data ).sortBy( sort( state.columns, getSortedColumn( state.columns ) ) ).value(),
      } )

    case PAGE_LAST:
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        filters: Object.assign( {}, state.filters, {
          page:        Math.ceil( state.data.length / state.filters.rowDisplayed ),
          startPageAt: ( (Math.ceil( state.data.length / state.filters.rowDisplayed ) - 1) * state.filters.rowDisplayed ),
        } ),
        data:    _( state.data ).sortBy( sort( state.columns, getSortedColumn( state.columns ) ) ).value(),
      } )

    case CHANGE_ROW_DISPLAYED:
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        filters: Object.assign( {}, state.filters,
          {
            page:         defaults.page,
            startPageAt:  defaults.startPageAt,
            rowDisplayed: action.num
          } )
      } )

    case SET_LANGUAGE:
      if ( localStorage ) localStorage.language = action.language
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        language: action.language
      } )

    case SET_USERNAME:
      if ( localStorage ) localStorage.lastLogin = action.username
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        username: action.username
      } )

    case LOGIN:
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        isFetching: true
      } )

    case LOGIN_SUCCESS:
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        username: action.credentials.username,
        token: action.credentials.token,
        isAuthenticated: true,
        isFetching: false
      } )

    case LOGIN_FAILED:
      return Object.assign( {}, state, {
        lastUpdated: action.receivedAt || Date.now(),
        isAuthenticated: false,
        isFetching: false
      } )

    case LOGOUT:
      return _.clone(initialState, true)

    default:
      return state
  }
}

export default rootReducer
