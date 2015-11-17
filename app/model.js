import m from 'mithril'
import 'fetch'
import { fromJS as toImmutable } from 'immutable'
import { inc, dec, stackLoader, loaderDisplay } from './utils'
import { groupMenu, sanitize } from './data'
import {
  fetchFile,
  fetchCategory,
  headers
} from './settings'

/** STYLES: CSS MODULES **/
import styles from './css/index.css!'

let Model = {}

Model.controller = function controller (attrs) {
  let c = {
    files:             attrs.files,
    category:          attrs.category,
    fetchFileList:     () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() ),
    fetchCategoryList: () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() ),
    load:              () => {
      inc( stackLoader )
      m.startComputation()
      Promise.all( [c.fetchFileList(), c.fetchCategoryList()] )
        .then( ([FileList, CategoryList]) => {
          c.files( toImmutable( sanitize( FileList, CategoryList ) ) )
          c.category( toImmutable( groupMenu( CategoryList, FileList ) ) )
        } )
        .then( () => {
          dec( stackLoader )
          m.endComputation()
        } )
    }
  }

  c.load()

  return c
}

Model.view = function view (c) {
  return (
    <div class={ styles.loading } style={ loaderDisplay() }>
      <div class={ styles.pulseloader }></div>
    </div>
  )
}

export default Model
