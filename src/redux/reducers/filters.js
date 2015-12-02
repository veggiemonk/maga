import { defaults } from '../../settings'
import _ from 'lodash'
import moment from 'moment'

export const filtering = state => {
  const { columns, filters, files }  = state
  return Object.assign( {}, state, {
    data: files.filter( file => {
      let isValid = true
      if ( filters.menuFilter ) {
        if ( isValid && filters.menuFilter.cat ) {
          isValid = _.contains( filters.menuFilter.cat, file.get( 'referenceDocument' ) )
        } else if ( isValid && filters.menuFilter.ref !== undefined ) {
          isValid = file.get( 'referenceDocument' ) === filters.menuFilter.ref
        }
      }
      if ( isValid && filters.dateBegin ) {
        isValid = file.get( 'date' ) >= filters.dateBegin
      }
      if ( isValid && filters.dateEnd ) {
        //TODO: REWRITE DATE COMPARISON FUNCTION!!!!
        isValid = file.get( 'date' ) < filters.dateEnd
      }
      if ( isValid && filters.searchKeyword ) {
        const regex = new RegExp( String( filters.searchKeyword ), 'i' )
        isValid     = columns
          .filter( c => c.get( 'visible' ) && c.get( 'searchable' ) )
          .some( c => regex.test( String( file.get( c.get( 'id' ) ) ) ) )
      }
      return isValid
    } )
  } )
}

