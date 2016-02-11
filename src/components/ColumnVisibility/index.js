import m from 'mithril';
import _ from 'lodash';

import { toggleColumnView } from './../../redux/actions';

import styles from './index.css!';

let ColumnVisibility = {};

ColumnVisibility.view = ( c, props ) => {

  const { columns, display, dispatch, i18n, language } = props;
  const i = k => i18n.t( k, { lng: language } );
  return (
    <div class={styles.spmenu_push} style={`display : ${display ? 'block' : 'none'};`}>
      <nav class={`${styles.spmenu} ${styles.spmenu_vertical} ${styles.spmenu_right} ${styles.spmenu_open}`}>
        <h3>{i( 'sideMenu.config' )}</h3>
        {
          _( columns )
            .filter( x => x[ 'toggle' ] )
            .sortBy( x => x[ 'name' ] )
            .map( x =>
              <a class={ !x[ 'visible' ] ? styles.active : '' }
                 onclick={ () => { dispatch( toggleColumnView( x['id'] ) ); } }>
                {/* m.trust( x[ 'name' ] ) */}
                {m.trust( i( 'col.' + x[ 'id' ] ) )}
              </a> ).value()
        }
      </nav>
    </div>
  );
};

export default ColumnVisibility;
