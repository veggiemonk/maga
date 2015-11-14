import m from 'mithril'
import Row from './row'

import h from './history'

import {invalidate} from './utils'

import styles from './css/visibleColumn.css!'

let Table = {}

Table.controller = function controller( attrs ) {
  let c = {
    files:            attrs.files,
    columnHeader:     attrs.columnHeader,
    toggleVisibility: colId => {
      h.operation(
        c.columnHeader(
          c.columnHeader()
            .map( x => x.get( 'id' ) === colId ? x.set( 'visible', !x.get( 'visible' ) ) : x ) ),
        'Toggle Column Visibility: ' + colId )
      invalidate()
    },
    //TODO
    sort:             k => {
      alert( 'SHOULD SORT: ' + k )
    },
  }

  //console.log( c.files() )
  return c
}

Table.view = function view( c ) {
  return (
    <div>
      <h2>Table</h2>
      <ul>
        {
          c.columnHeader().map( x =>
            <li onclick={ () => { c.toggleVisibility( x.get('id') ) } }>
              { m.trust( x.get( 'name' ) ) }
            </li> ).toJS()
        }
      </ul>
      <table>
        <thead>
        {
          c.columnHeader()
            .filter( x => x.get( 'visible' ) /*!== undefined*/ )
            .map( x =>
              <th
                key={ x.get('id') }
                onclick={() => { c.sort(x.get( 'id' )) } }>
                { m.trust( x.get( 'name' ) ) }
              </th> ).toJS()
        }
        </thead>
        <tbody>
        {
          c.files().map( file => (
            <Row
              key={ file.get('index') }
              file={ file }
              columnHeader={ c.columnHeader }/>
          ) ).toJS()
        }
        </tbody>
      </table>
    </div>
  )
}

export default Table
