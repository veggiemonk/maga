import 'isomorphic-fetch'

import { groupMenu, sanitize } from './data'
import { loadData, fetchData } from './redux/actions'
import { columns, headers, fetchURLFile, fetchURLCategory} from './settings'

/* ASYNC */
export const fetchFileList     = ( url ) => fetch( url, headers( 'GET' ) ).then( res => res.json() )
export const fetchCategoryList = ( url ) => fetch( url, headers( 'GET' ) ).then( res => res.json() )
export const fetching          = ( dispatch ) => {

  dispatch( fetchData() )
  return Promise.all( [ fetchFileList( fetchURLFile ), fetchCategoryList( fetchURLCategory ) ] )
    .then( ( [FileList, CategoryList] ) => {
      const files = sanitize( FileList, CategoryList )

      dispatch(
        loadData( columns,
                  files,
                  files,
                  groupMenu( CategoryList, FileList ) )
      )
    } )
}
