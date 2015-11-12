import m from 'mithril'
//import { Map, fromJS as toImmutable } from 'immutable'

import {columnHeader} from './settings'

import styles from './css/row.css!'


var Row = {};

Row.controller = function controller (attrs, children) {
  var c = {
    file:     attrs.file,
    visible:  columnHeader.filter( x => x.get( 'visible' ) ).map( x => x.get( 'id' ) ).toMap().flip(),
    download: () => {}
  }

  return c;
}


Row.view = function view (c, attrs, children) {
  let v = k => c.visible.get( k ) !== undefined
  return (
    <tr>
      <td class="center iconSelect">{ m.trust( c.file.get( 'checkbox' ) ) }</td>
      <td class={styles.textcenter}>
        <a class="dlfile" data-file-id="[[fileId]]" data-filename="[[fileName]]">
          <i class="fa { c.file.get('dlClass') } fa-lg { c.file.get('alreadyDL') }"></i>
          <small class={styles.textmuted}>&nbsp;{ c.file.get( 'downloadCount' ) }</small>
        </a>
      </td>
      {v( 'date' )            ? <td class={styles.textcenter}>{ c.file.get( 'dateFormatted' )}</td> : ''}
      {v( 'filename' )        ? <td><a class="dlfileLabel">{ c.file.get( 'filename' )}</a></td> : '' }
      {v( 'uploadUserName' )  ? <td>{ c.file.get( 'uploadUserName' )}</td> : '' }
      {v( 'employerNumber' )  ? <td>{ c.file.get( 'employerNumber' )}</td> : '' }
      {v( 'label' )           ? <td><a class="dlfileLabel">{ c.file.get( 'label' )}</a></td> : '' }
      {v( 'referenceDocument' ) ? <td>{ c.file.get( 'referenceDocument' )}</td> : '' }
      {v( 'size' )   ? <td class={styles.textright}>{ c.file.get( 'sizeFormatted' ) }</td> : '' }
      {v( 'extension' ) ? <td class={styles.textcenter}>{ c.file.get( 'extensionFormatted' ) }</td> : '' }
      {v( 'path' )            ? <td>{ c.file.get( 'path' ) }</td> : '' }
      {v( 'referenceClient' ) ? <td>{ c.file.get( 'referenceClient' ) }</td> : '' }
      {v( 'counter' )         ? <td>{ c.file.get( 'counter' ) }</td> : '' }
      {v( 'referenceGroupS' ) ? <td>{ c.file.get( 'referenceGroupS' ) }</td> : '' }
      {v( 'uploadStamp' )     ? <td class={styles.textcenter}>{c.file.get( 'uploadStamp' )}</td> : '' }
      {v( 'uploaderComment' ) ?
        <td class="comments" data-toggle="tooltip" data-placement="left" data-container="body" data-html="true"
            title={ c.file.get('uploaderComment') }>{ c.file.get( 'uploaderCommentLimit' ) }
        </td> : ''  }
      <td class={styles.textcenter}>
        <a class="remove" title="Remove" onclick={() => { alert('test'); c.download( c.file.get( 'fileId' ) ) } }>
          { m.trust( c.file.get( 'remove' ) )}
        </a></td>
    </tr>
  )
}

export default Row




