import m from 'mithril'

import css from 'font-awesome/css/font-awesome.css!'
//console.log('css = ', css)
//import { Map, fromJS as toImmutable } from 'immutable'

import styles from './index.css!'

let Row = {}

Row.controller = function controller( props ) {
  const {dispatch} = props
  return {
    file:     props.file,
    download: fileId => {
      alert( 'DOWNLOAD: ' + fileId )
    },
    remove:   fileId => {
      alert( 'REMOVE: ' + fileId )
    },
  }
}

Row.view = function view( c, props ) {
  const { columns } = props
  const v = k => columns.get( k ).get( 'visible' )
  return (
    <tr>
      <td class='center iconSelect'>{ m.trust( c.file.get( 'checkbox' ) ) }</td>
      <td class={styles.text_center}>
        <button onclick={()=> {c.download(c.file.get('fileId'))}}>
          <i class={ css.fa + ' ' + c.file.get('dlClass') + ' ' + css['fa-lg'] + ' ' + c.file.get('alreadyDL') }></i>
          <small class={styles.text_muted}> { c.file.get( 'downloadCount' ) }</small>
        </button>
      </td>
      {v( 'date' ) ? <td class={styles.text_center}>{ c.file.get( 'dateFormatted' )}</td> : ''}
      {v( 'fileName' ) ? <td><a class='dlfileLabel'>{ c.file.get( 'fileName' )}</a></td> : '' }
      {v( 'uploadUserName' ) ? <td>{ c.file.get( 'uploadUserName' )}</td> : '' }
      {v( 'employerNumber' ) ? <td>{ c.file.get( 'employerNumber' )}</td> : '' }
      {v( 'label' ) ? <td class={styles.text_overflow}><a class='dlfileLabel'>{ c.file.get( 'label' )}</a></td> : '' }
      {v( 'referenceDocument' ) ? <td>{ c.file.get( 'referenceDocument' )}</td> : '' }
      {v( 'size' ) ? <td class={styles.text_right}>{ c.file.get( 'sizeFormatted' ) }</td> : '' }
      {v( 'extension' ) ? <td class={styles.text_center}>{ m.trust( c.file.get( 'extensionFormatted' ) ) }</td> : '' }
      {v( 'path' ) ? <td>{ c.file.get( 'path' ) }</td> : '' }
      {v( 'referenceClient' ) ? <td>{ c.file.get( 'referenceClient' ) }</td> : '' }
      {v( 'counter' ) ? <td>{ c.file.get( 'counter' ) }</td> : '' }
      {v( 'referenceGroupS' ) ? <td>{ c.file.get( 'referenceGroupS' ) }</td> : '' }
      {v( 'uploadStamp' ) ? <td class={styles.text_center}>{c.file.get( 'uploadStampFormatted' )}</td> : '' }
      {v( 'uploaderComment' ) ?
        <td data-toggle='tooltip' data-placement='left' data-container='body' data-html='true'
            title={ c.file.get('uploaderComment') }>{ c.file.get( 'uploaderCommentLimit' ) }
        </td> : ''  }
      <td class={styles.text_center}>
        <a class={styles.text_danger} title='Remove' onclick={() => { c.remove( c.file.get( 'fileId' ) ) } }>
          { m.trust( c.file.get( 'remove' ) )}
        </a></td>
    </tr>
  )
}

export default Row

