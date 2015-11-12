import m from 'mithril'
import Row from './row'
import {columnHeader} from './settings'

let Table = {};

Table.controller = function controller (attrs, children) {
  let c = {
    files:           attrs.files,
    colConfig:       attrs.colConfig,
    /*listHeaders:     cc => cc.filter( k => k.visible ).toArray(),*/
    sort: k => {alert('SOULD SORT: ' + k)} //TODO
  }
  //console.log( c.files() )
  return c;
}

Table.view = function view (c, attrs, children) {
  return (
    <div>
      <h2>Table</h2>
      <table>
        <thead>
        { columnHeader.filter( x => x.get( 'visible' ))
          .map(x => <th onclick={() => { c.sort(x.get( 'id' )) } }>{ m.trust(x.get( 'name' )) }</th> ).toJS()
        }
        </thead>
        <tbody>
        { c.files().map( file => {
          return <Row file={file} colConfig={c.colConfig()}/>
        } ).toJS() }
        </tbody>
      </table>
    </div>
  )
}

export default Table