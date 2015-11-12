import m from 'mithril'
import styles from './row.css!'

var Row = {};

Row.controller = function controller (attrs, children) {
  var c = {
    file: attrs.file
  }

  return c;
}


Row.view = function view (c, attrs, children) {
  return (
    <tr>
      <td class="center iconSelect">{ m.trust( c.file.get( 'checkbox' ) )}</td>
      <td class={styles.textcenter}>
        <a class="dlfile" data-file-id="[[fileId]]" data-filename="[[fileName]]">
          <i class="fa { c.file.get('dlClass') } fa-lg { c.file.get('alreadyDL') }"></i>
          <small class={styles.textmuted}>&nbsp;{ c.file.get( 'downloadCount' ) }</small>
        </a>
      </td>
      <td class={styles.textcenter}>{ c.file.get( 'dateFormatted' )}</td>
      <td><a class="dlfileLabel">{ c.file.get( 'filename' )}</a></td>
      <td>{ c.file.get( 'uploadUserName' )}</td>
      <td>{ c.file.get( 'employerNumber' )}</td>
      <td><a class="dlfileLabel">{ c.file.get( 'label' )}</a></td>
      <td>{ c.file.get( 'referenceDocument' )}</td>
      <td class={styles.textright}>{ c.file.get( 'sizeFormatted' ) }</td>
      <td class={styles.textcenter}>{ c.file.get( 'extensionFormatted' ) }</td>
      <td>{ c.file.get( 'strippedPath' ) }</td>
      <td>{ c.file.get( 'referenceClient' ) }</td>
      <td>{ c.file.get( 'counter' ) }</td>
      <td>{ c.file.get( 'referenceGroupS' ) }</td>
      <td class={styles.textcenter}>{c.file.get( 'uploadStamp' )}</td>
      <td class="comments" data-toggle="tooltip" data-placement="left" data-container="body" data-html="true"
          title={ c.file.get('uploaderComment') }>{ c.file.get( 'uploaderCommentLimit' ) }
      </td>
      <td>{ c.file.get( 'filename' )}</td>
      <td class={styles.textcenter}>
        <a class="remove" title="Remove" data-file-id="[[fileId]]">
          { m.trust( c.file.get( 'remove' ) )}
        </a></td>
    </tr>
  )
}

export default Row




