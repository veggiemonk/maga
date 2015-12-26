import m from 'mithril'
import _ from 'lodash'

import css from 'font-awesome/css/font-awesome.css!'
//console.log('css = ', css)
//import { Map, fromJS as toImmutable } from 'immutable'

import styles from './index.css!'
import Button from '../Button/index'

let Row = {}

Row.controller = function controller( props ) {
  const {dispatch} = props
  return {
    download: fileId => {
      alert( 'DOWNLOAD: ' + fileId )
    },
    remove:   fileId => {
      alert( 'REMOVE: ' + fileId )
    },
  }
}

Row.view = function view( c, props ) {
  const { columns, file } = props
  const v = k => _.result(_.find(columns, { id: k} ), 'visible')
  return (
    <tr>
      <td class='center iconSelect'>{ m.trust( file[ 'checkbox' ] ) }</td>
      <td class={styles.text_center}>
        <Button onclick={()=> {c.download(file['fileId'])}}>
          <i class={ `${css.fa} ${file['dlClass']} ${css['fa-lg']} ${file['alreadyDL']}` }>
          </i>
          <small class={styles.text_muted}> { file[ 'downloadCount' ] }</small>
        </Button>
      </td>
      {v( 'date' ) ? <td class={styles.text_center}>{ file[ 'dateFormatted' ]}</td> : ''}
      {v( 'fileName' ) ? <td><a class='dlfileLabel'>{ file[ 'fileName' ]}</a></td> : '' }
      {v( 'uploadUserName' ) ? <td>{ file[ 'uploadUserName' ]}</td> : '' }
      {v( 'employerNumber' ) ? <td>{ file[ 'employerNumber' ]}</td> : '' }
      {v( 'label' ) ? <td class={styles.text_overflow}><a class='dlfileLabel'>{ file[ 'label' ]}</a></td> : '' }
      {v( 'referenceDocument' ) ? <td>{ file[ 'referenceDocument' ]}</td> : '' }
      {v( 'size' ) ? <td class={styles.text_right}>{ file[ 'sizeFormatted' ] }</td> : '' }
      {v( 'extension' ) ? <td class={styles.text_center}>{ m.trust( file[ 'extensionFormatted' ] ) }</td> : '' }
      {v( 'path' ) ? <td>{ file[ 'path' ] }</td> : '' }
      {v( 'referenceClient' ) ? <td>{ file[ 'referenceClient' ] }</td> : '' }
      {v( 'counter' ) ? <td>{ file[ 'counter' ] }</td> : '' }
      {v( 'referenceGroupS' ) ? <td>{ file[ 'referenceGroupS' ] }</td> : '' }
      {v( 'uploadStamp' ) ? <td class={styles.text_center}>{file[ 'uploadStampFormatted' ]}</td> : '' }
      {v( 'uploaderComment' ) ?
        <td data-toggle='tooltip' data-placement='left' data-container='body' data-html='true'
            title={ file['uploaderComment'] }>{ file[ 'uploaderCommentLimit' ] }
        </td> : ''  }
      <td class={styles.text_center}>
        <a class={styles.text_danger} title='Remove' onclick={() => { c.remove( file[ 'fileId' ] ) } }>
          { m.trust( file[ 'remove' ] )}
        </a></td>
    </tr>
  )
}

export default Row

