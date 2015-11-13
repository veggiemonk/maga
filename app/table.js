import m from 'mithril'
import Row from './row'
import {columnHeader, visibleColumn} from './settings'
import h from './history'
import {invalidate} from './utils'
import styles from './css/visibleColumn.css!'

let Table = {}

Table.controller = function controller (attrs) {
  let c = {
    files:            attrs.files,
    columnHeader:     columnHeader,
    colConfig:        m.prop( visibleColumn ),
    toggleVisibility: colId => {
      h.operation( c.colConfig(
        c.colConfig().set( colId,
          !c.colConfig().get( colId ) ) ),
        'Toggle Column Visibility: ' + colId + ' NEW VAL = ' + c.colConfig().get( colId ))
      invalidate()
    },
    //TODO
    sort:             k => { alert( 'SHOULD SORT: ' + k ) },
  }

  //console.log( c.files() )
  return c
}

Table.view = function view (c) {
  return (
    <div>
      <h2>Table</h2>
      <ul>
        { c.colConfig().map( x =>
          <li onclick={ () => { c.toggleVisibility( x.get('id') ) } }>
            { x.get( 'name' ) }
          </li> ).toJS() }
      </ul>
      <table>
        <thead>
        { c.columnHeader
          .filter( x => x.get( 'visible' ) )
          .map( x => <th
            key={ x.get('id') }
            onclick={() => { c.sort(x.get( 'id' )) } } >
            { m.trust( x.get( 'name' ) ) }
          </th> ).toJS()
        }
        </thead>
        <tbody>
        { c.files().map( file => {
          return <Row key={ file.get('index') } file={file}/>
        } ).toJS() }
        </tbody>
      </table>
    </div>
  )
}

export default Table
