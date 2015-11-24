import { defaults } from '../../settings'
import moment from 'moment'

export const filtering = state => {
  const { columns, filters, files }  = state
  return Object.assign( {}, state, {
    data: files.filter( file => {
      let isValid = true
      if ( filters.menuFilter ) {
        if ( isValid && filters.menuFilter.cat ) {
          isValid = file.get( 'referenceDocument' ) === filters.menuFilter.ref
          /*TODO get data from menu category*/
        } else if ( isValid && filters.menuFilter.ref ) {
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
        const regex = new RegExp( String( filters.searchKeyword ), 'i')
        isValid = columns
            .filter( c => c.get('visible') && c.get('searchable'))
            .some( c => regex.test( String( file.get( c.get('id') ) ) ) )
        /*for ( let keys of columns.filter( c => c.get('visible') && c.get('searchable')).keys() ) {
          console.log( keys, isValid, regex.test( String( file.get( keys ) ) ) )
          isValid ? isValid = regex.test( String( file.get( keys ) ) ) : isValid
        }*/
        //file.find( v => regex.test(v) )
      }
      return isValid
    } )
  } )
}

