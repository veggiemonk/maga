import m from 'mithril';
import 'isomorphic-fetch';
import _ from 'lodash';
import { headers, urlEchoServer} from '../../settings';
import styleB from '../../css/buttons.css!';
import styles from './index.css!';

const lang   = 'fr';
let Uploader = {};

//TODO: extract to client side execution when doing server side rendering
//drag and drop micro-library
const dragdrop = ( element, options ) => {
  options = options || {};

  element.addEventListener( 'dragover', activate );
  element.addEventListener( 'dragleave', deactivate );
  element.addEventListener( 'dragend', deactivate );
  element.addEventListener( 'drop', deactivate );
  element.addEventListener( 'drop', update );
  window.addEventListener( 'blur', deactivate );

  function activate( e ) {
    e.preventDefault();
  }

  function deactivate() {}

  function update( e ) {
    e.preventDefault();
    if ( typeof options.onchange == 'function' ) {
      options.onchange( (e.dataTransfer || e.target).files );
    }
  }
};

const upload = files => {
  let formData = new FormData;
  for ( let i = 0; i < files.length; i++ ) {
    formData.append( files[ i ].name, files[ i ] );
  }
  return fetch( urlEchoServer, { method: 'POST', body: formData } );
};

Uploader.config = ctrl => ( element, isInitialized, context ) => {
  if ( !isInitialized ) {
    dragdrop( element, { onchange: ctrl.onchange } );
  }
};

Uploader.controller = props => {
  let c = {
    files:        [],
    visible:      false,
    onchange:     props.onchange || ( files => {
      //list files in a ul
      c.files = files;
      //TODO: handle error
      upload( files )
        .then( () => { m.redraw(); } )
        .catch( e => {
          console.error( e );
          alert( 'File upload Failed' );
          throw new Error( 'File upload Failed', e );
        } );
    } ),
    toggleUpload: () => {
      m.redraw.strategy( 'diff' );
      c.visible = !c.visible;
    },
  };
  return c;
};
//TODO: progress bar

Uploader.view = ( c, props ) => {
  return (
    <div>
      <a href="#box"
         class={`${styleB.button} ${styles.upload}`}
         onclick={c.toggleUpload}><i class="fa fa-2x fa-cloud-upload"></i>{props.i18n.uploadBtn[ lang ]}</a>
      <div id="box" class={styles.box}>
        <div class={styles.lightbox} config={Uploader.config(c)}>
          <a href="#">X</a>
          <ul class={styles.dropzone}>{
            _.map( c.files, ( x => (
              <li>
                <span>{x.name}</span>
                <span class={styles.size}>{x.size}</span>
              </li>
            ) ) )
          }</ul>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
