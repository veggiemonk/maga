import m from 'mithril'

import Row from './row.js'
let Table = {};

Table.controller = function controller (attrs, children) {
  let c = {
    files:           attrs.files,
    colConfig:       attrs.colConfig,
    listHeaders:     cc => cc.filter( k => k.visible ).toArray(),
    listDataHeaders: (file, cc) => {
      cc.filter( k => k.visible ).mapKeys( cell => {
        //console.log(cell);
        return (
          cc.get( cell )
            ? cc.get( cell ).visible ? <td>{file.get( cell )}</td> : ''
            : '')
      } ).toArray()
    },
    sort: () => {} //TODO
  }
  console.log( c.files() )
  return c;
}

Table.view = function view (c, attrs, children) {
  return (
    <div>
      <h2>Table</h2>
      <table>
        <thead>
        { c.listHeaders( c.colConfig() ).map( col => {
          return (<th onclick={ c.sort(col) }>{
            col.name
              ? m.trust( col.name )
              : c.colConfig().flip().get( col )  //get name of the key of the column
          }</th>)
        } ) }
        </thead>
        <tbody>
        { c.files()/*.sortBy( o => o.index )*/.map( file => {
          return <Row file={file} colConfig={c.colConfig()}/>
        } ).toJS() }
        </tbody>
      </table>
    </div>
  )
}

export default Table