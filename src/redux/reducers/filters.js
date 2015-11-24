import { defaults } from '../../settings'

export const filtering = state => {
  const { filters, files }  = state
  return Object.assign( {}, state, {
    data: files.filter( file => {
      let isValid = true
      if ( filters.menuFilter ) {
        if ( filters.menuFilter.cat ) {
          isValid = file.get( 'referenceDocument' ) === filters.menuFilter.ref
          /*TODO get data from menu category*/
        } else if ( filters.menuFilter.ref ) {
          isValid = file.get( 'referenceDocument' ) === filters.menuFilter.ref
        }
      }
      if ( filters.dateBegin ) {
        isValid = file.get( 'date' ) >= filters.dateBegin
      }
      if ( filters.dateEnd ) {
        isValid = file.get( 'date' ) < filters.dateEnd
      }
      if ( filters.searchKeyword ) {
        isValid = { /*TODO: Search in Object */ }
      }
      return isValid
    } )
  } )
}

