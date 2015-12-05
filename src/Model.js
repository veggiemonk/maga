import m from 'mithril'
import 'isomorphic-fetch'
import { fromJS as toImmutable } from 'immutable'
import { loaderDisplay } from './utils'
import { groupMenu, sanitize } from './data'
import { fetchFile, fetchCategory, headers } from './settings'

import { loadData } from './redux/actions'

/** CSS MODULES !! **/
import styles from './css/index.css!'

let Model = {}

Model.controller = function controller( props ) {
  let c = {
    store:             props.store,
    fetchFileList:     () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() ),
    fetchCategoryList: () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() ),
    load:              () => {
      return Promise.all( [c.fetchFileList(), c.fetchCategoryList()] )
        .then( ([FileList, CategoryList]) => {
          const files = toImmutable( sanitize( FileList, CategoryList ) )

          c.store.dispatch(
              loadData( props.columnHeader, files, files, 
                toImmutable( groupMenu( CategoryList, FileList ) ) )
          )
      } )  
    }
  }

  c.load()

  return c
}

Model.view = function view() {
  return (
    <div class={ styles.loading } style={ loaderDisplay() }>
      <div class={ styles.pulseloader }></div>
    </div>
  )
}

export default Model
