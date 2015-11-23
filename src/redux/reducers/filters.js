import { defaults } from '../../settings'

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
    SELECT_ROW
} from '../actions'

export default (state = {}, action) => {

  let rd = state.filters ? state.filters.rowDisplayed : defaults.rowDisplay
  let sa = state.filters ? state.filters.startPageAt : defaults.startPageAt

  switch ( action.type ) {
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
            startPageAt: sa - rd
          }
        } )
      } else {
        return state
      }
    default:
      return state
  }
}
