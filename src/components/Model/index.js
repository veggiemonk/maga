import m from 'mithril'
import 'isomorphic-fetch'
import { fromJS as toImmutable } from 'immutable'
import { loaderDisplay } from './../../utils'
import { groupMenu, sanitize } from './../../data'
import { fetchFile, fetchCategory, headers } from './../../settings'

import { loadData } from './../../redux/actions'

/** CSS MODULES !! **/
import styles from './index.css!'

let Model = {}

Model.controller = function controller( props ) {
  const { dispatch } = props
  let c = {
    //TODO: .catch(function(error) { console.log('There has been a problem with your fetch operation: ' + error.message) })
    fetchFileList:     () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() ),
    fetchCategoryList: () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() ),
    load:              () => {
      return Promise.all( [c.fetchFileList(), c.fetchCategoryList()] )
        .then( ([FileList, CategoryList]) => {
          const files = toImmutable( sanitize( FileList, CategoryList ) )

          dispatch(
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
