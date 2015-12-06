import m from 'mithril'

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
    console.log( 'options.onchange', options.onchange )
    if ( typeof options.onchange == 'function' ) {
      options.onchange( (e.dataTransfer || e.target).files )
    }
  }
}

const upload = files => {
  let formData = new FormData
  for ( let i = 0; i < files.length; i++ ) {
    formData.append( 'file' + i, files[ i ] )
  }

  return m.request( {
    method:    'POST',
    url:       '/echo/json',
    data:      formData,
    //simply pass the FormData object intact to the underlying XMLHttpRequest, instead of JSON.stringify'ing it
    serialize: value => value
  } )
}

Uploader.config = ctrl => (element, isInitialized, context) => {
  if ( !isInitialized ) {
    dragdrop( element, { onchange: ctrl.onchange } )
  }
}

Uploader.controller = props => {
  return {
    onchange: props.onchange || ( files => { console.log( files ) } ) //call upload
  }
}

Uploader.view = (c, props) => {
  return (
    <div>
      <h1>Upload Files Here</h1>
      <p>folders not accepted</p>
      <div class={styles.uploader} config={Uploader.config(c)}></div>
    </div>
  )
}


export default Uploader
