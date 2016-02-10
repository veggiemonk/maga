import m from 'mithril';
import _ from 'lodash';

import { toggleSelectRow } from '../../redux/actions';
import Button from '../Button/index';

//import css from 'font-awesome/css/font-awesome.css!'
//import styles from './row.css!'
import styles from '../../css/text.css!';

let Row = {};

Row.controller = function controller( props ) {
  const {dispatch} = props;
  return {
    download: fileId => {
      alert( 'DOWNLOAD: ' + fileId );
    },
    remove:   fileId => {
      alert( 'REMOVE: ' + fileId );
    },
  };
};

Row.view = function view( c, props ) {
  const { columns, file, dispatch, selectedRow } = props;
  const v         = k => _.result( _.find( columns, { id: k } ), 'visible' );
  const isChecked = (fileId) => _.contains( selectedRow, fileId );
  return (
    <tr>
      <td class={styles.text_center}
          onclick={() => { dispatch(toggleSelectRow(file.fileId)); }}>
        { m.trust( isChecked( file.fileId ) ? file[ 'checkbox' ].replace( '\/>', ' checked \/>' ) : file[ 'checkbox' ] ) }
      </td>
      <td class={styles.text_center}>
        <Button onclick={()=> {c.download(file['fileId']);}}>
          <i class={ `fa fa-lg ${file['dlClass'] || ''} ${file['alreadyDL'] || ''}` }>
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
        <a class={styles.text_danger}
           title='Remove'
           onclick={() => { c.remove( file[ 'fileId' ] ); } }>
          { m.trust( file[ 'remove' ] )}
        </a></td>
    </tr>
  );
};

export default Row;

