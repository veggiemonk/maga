import { defaults } from '../../settings'
import _ from 'lodash'
import moment from 'moment'

import { sort, getSortedColumn} from './columns'

export const filtering = state => {
  const { columns, filters, files }  = state
  const { menuFilter, dateBegin, dateEnd, searchKeyword} = filters
  return Object.assign( {}, state, {
    data: _.filter( files, file => {
      let isValid = true
      if ( menuFilter ) {
        if ( isValid && menuFilter.cat ) {
          isValid = _.contains( menuFilter.cat, file[ 'referenceDocument' ] )
        } else if ( isValid && menuFilter.ref !== undefined ) {
          isValid = file[ 'referenceDocument' ] === menuFilter.ref
        }
      }
      if ( isValid && dateBegin ) {
        isValid = file[ 'date' ].isAfter( moment(dateBegin, defaults.dateFormat) )
      }
      if ( isValid && filters.dateEnd ) {
        isValid = file[ 'date' ].isBefore( moment(dateEnd, defaults.dateFormat) )
      }
      if ( isValid && filters.searchKeyword ) {
        const regex = new RegExp( String( searchKeyword ), 'i' )
        isValid     = _( columns )
          .filter( c => c[ 'visible' ] && c[ 'searchable' ] )
          .some( c => regex.test( String( file[ c[ 'id' ] ] ) ) )
      }
      return isValid
    } )
  } )
}

/*export const filtering = state => {
  const { columns, filters, files }  = state
  const { menuFilter, dateBegin, dateEnd, searchKeyword} = filters
  const idColSorted    = getSortedColumn( state.columns )
  const orderColSorted = _.result( _.find( state.columns, { id: idColSorted } ), 'order' ) ? 'desc' : 'asc'
  return Object.assign( {}, state, {
    data: _(files)
            .filter( ( file ) => {
              let isValid = true

              if ( menuFilter ) {
                if ( isValid && menuFilter.cat ) {
                  isValid = _.contains( menuFilter.cat, file[ 'referenceDocument' ] )
                } else if ( isValid && menuFilter.ref !== undefined ) {
                  isValid = file[ 'referenceDocument' ] === menuFilter.ref
                }
              }
              if ( isValid && dateBegin ) {
                isValid = file[ 'date' ].isAfter( dateBegin )
              }
              if ( isValid && filters.dateEnd ) {
                isValid = file[ 'date' ].isBefore( dateEnd )
              }
              if ( isValid && filters.searchKeyword ) {
                const regex = new RegExp( String( searchKeyword ), 'i' )
                isValid     = _( columns )
                  .filter( c => c[ 'visible' ] && c[ 'searchable' ] )
                  .some( c => regex.test( String( file[ c[ 'id' ] ] ) ) )
              }
              return isValid
            } )
            .sortBy( sort( state.columns, idColSorted ) )
            .sortByOrder( idColSorted, orderColSorted )
            .slice( filters.startPageAt )
            .take( filters.rowDisplayed )
            .value()
  } )
}*/
