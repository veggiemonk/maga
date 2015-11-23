import { defaults } from '../../settings'

export const makeFilter = (state, action) => x => {
  let { filters }  = state
  if ( filters.menuFilter.cat ) {

  }
  if ( filters.menuFilter.ref ) {

  }
  if ( filters.dateBegin ) {

  }
  if ( filters.dateEnd ) {

  }
  if ( filters.searchKeyword ) {

  }
  if ( filters.page && filters.rowDisplayed && filters.startPageAt ) {

  }
  return state
}

