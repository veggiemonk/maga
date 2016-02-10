import m from 'mithril';
import _ from 'lodash';
import Row from './../Row/index';

import {
  toggleSelectAll,
  sortColumn,
  toggleColumnView,
  filterDateBegin,
  filterDateEnd,
  filterMenuCat,
  filterMenuRef,
  filterSearch
} from './../../redux/actions';
import { getSortedColumn } from './../../redux/reducers/columns';

import { invalidate, inc, dec } from './../../utils';
import { defaults, permanentColumn } from './../../settings';

import styles from './table.css!';


/***
 * show the 3 states of a column sortwise
 * @param: id  id of the column
 * @returns: JSX object
 **/
const cssSortToggle = col => {
  //let col = columns.get( colId ).toJS()
  if ( col && col.sortable ) {
    return !col.sorted
      ? ( <i class='fa fa-sort right'></i> )
      : ( col.order
      ? ( <i class='fa fa-sort-desc right'></i> )
      : ( <i class='fa fa-sort-asc right'></i>  ) );
  }
};

let Table = {};

Table.controller = function controller(props) {
  let c = {
    vm: { cssSortToggle }
  };
  return c;
};

Table.view = function view(c, props) {
  const { dispatch, display, data, columns, filters, selectedRow, i18n, language } = props;
  const i                 = k => i18n.t( k, { lng: language } );
  const idColSorted       = getSortedColumn( columns );
  const orderColSorted    = _.result( _.find( columns, { id: idColSorted } ), 'order' ) ? 'desc' : 'asc';
  const seqParseData      = (data) => {
    return _( data )
      .sortByOrder( idColSorted, orderColSorted )
      .slice( filters.startPageAt )
      .take( filters.rowDisplayed );
  };
  const getIdColDisplayed = (data) => ( seqParseData( data ).pluck( 'fileId' ).value() );
  const isAllChecked      = ({ data, main }) => {
    const { currentTarget } = main;
    const { firstChild } = currentTarget;
    const { checked } = firstChild;
    return (
      selectedRow.length === filters.rowDisplayed
        ? toggleSelectAll( [] )
        : toggleSelectAll( checked ? getIdColDisplayed( data ) : [] )
    );
  };

  return (
    <div style={`display : ${display ? 'inline-block' : 'none'};`}>
      <table class={styles.collapse}>
        <thead class={`${styles.fixed}`}>
        <th
          class={` ${styles.row_width} ${permanentColumn[0].id} `}
          onchange={(el) => { dispatch( isAllChecked( { data, main: el } ) ); }}>
          <input type="checkbox" value="false"/>
        </th>
        <th
          class={` ${styles.row_width} ${permanentColumn[1].id}`}
          onclick={() => { dispatch(  sortColumn( permanentColumn[1].id ) ); }}>
          <i class="fa fa-download"> </i>
        </th>
        {
          _( columns )
            .sortBy( x => x[ 'index' ] )
            .filter( x => x[ 'visible' ] )
            .map( col =>
              <th
                class={` ${styles.row_width} ${col[ 'id' ]} `}
                key={ col[ 'id' ] }
                onclick={ () => { dispatch( sortColumn( col[ 'id' ] ) ); }}>
                {/* m.trust( col[ 'name' ] ) */}
                {m.trust( i( 'col.' + col[ 'id' ] ) )}
                { c.vm.cssSortToggle( col ) }
              </th> ).value()
        }
        <th
          class={` ${styles.row_width} ${permanentColumn[1].id}`}
          onclick={() => { dispatch(  sortColumn( permanentColumn[2].id ) ); }}>
          <i class="fa fa-ban"> </i>
        </th>
        </thead>
        <tbody>{
          seqParseData( data )
            .map( file => (
              <Row
                key={ file['index'] }
                file={ file }
                dispatch={ dispatch }
                {...props}>
              </Row> ) ).value()
        }</tbody>
      </table>
    </div>
  );
};

export default Table;
