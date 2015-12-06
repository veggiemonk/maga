import m from 'mithril'
import 'isomorphic-fetch'
import _ from 'lodash'
import { headers, urlEchoServer} from '../../settings'

import { connect } from '../../redux/mithril-redux'

import styles from './index.css!'

let Uploader = {}

//drag and drop micro-library
const dragdrop = (element, options) => {
  options = options || {}

  element.addEventListener( 'dragover', activate )
  element.addEventListener( 'dragleave', deactivate )
  element.addEventListener( 'dragend', deactivate )
  element.addEventListener( 'drop', deactivate )
  element.addEventListener( 'drop', update )
  window.addEventListener( 'blur', deactivate )

  function activate(e) {
    e.preventDefault()
  }

  function deactivate() {}

  function update(e) {
    e.preventDefault()
    if ( typeof options.onchange == 'function' ) {
      options.onchange( (e.dataTransfer || e.target).files )
    }
  }
}

const upload = files => {
  let formData = new FormData
  for ( let i = 0; i < files.length; i++ ) {
    formData.append( files[ i ].name, files[ i ] )
  }

  /*return m.request( {
   method:    'POST',
   url:       'http://localhost:4000/echo/json',
   data:      formData,
   //simply pass the FormData object intact to the underlying XMLHttpRequest, instead of JSON.stringify'ing it
   serialize: function (value) {return value}
   } )*/
  return fetch( urlEchoServer, { method: 'POST', body: formData } )
}

Uploader.config = ctrl => (element, isInitialized, context) => {
  if ( !isInitialized ) {
    dragdrop( element, { onchange: ctrl.onchange } )
  }
}

Uploader.controller = props => {
  let c = {
    files:        [],
    visible:      false,
    onchange:     props.onchange || ( files => {
      //list files in a ul
      c.files = files
      //TODO: handle error
      upload( files )
        .then( () => { m.redraw() } )
        .catch( e => {
          console.error(e)
          throw new Error('File upload Failed', e)
        } )
    } ),
    toggleUpload: () => {
      m.redraw.strategy( 'diff' )
      c.visible = !c.visible
    },
  }
  return c
}
//TODO: progress bar

Uploader.view = (c, props) => {
  return (
    <div>
      <button onclick={c.toggleUpload}>{c.visible ? 'Hide Uploader' : 'Show Uploader'}</button>
      { c.visible
        ? (<div>
        <h1>Upload Files Here</h1>
        <p>folders not accepted</p>
        <div class={styles.uploader} config={Uploader.config(c)}>
          <ul>{
            _.map( c.files, ( x => (
              <li>
                <span>{x.name}</span>
                <span class={styles.size}>{x.size}</span>
              </li>
            ) ) )
          }</ul>
        </div>
      </div>)
        : ''
      }
    </div>
  )
}

Uploader = connect((state) => state)(Uploader)
export default Uploader
