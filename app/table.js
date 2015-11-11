import m from 'mithril'

let Table = {};

Table.controller = function controller( attrs, children ) {
  let c = {
    files: attrs.files,
    colConfig: attrs.colConfig,
    listHeaders: cc => cc.filter( k => k.visible ).toArray(),
    listDataHeaders: (file, cc) => { cc.filter( k => k.visible ).mapKeys( cell => {
      //console.log(cell);
      return (
        cc.get(cell)
          ? cc.get(cell).visible ? <td>{file.get(cell)}</td> : ''
          : '')
    } ).toArray() }
  }
  console.log( c.files())
  return c;
}

Table.view = function view( c, attrs, children ) {
  return (
    <div>
      <h2>Table</h2>
      <table>
        <thead>
        { c.listHeaders( c.colConfig() ).map( col => {
          //console.log('COL = ',col, c.colConfig())
          return (<th>{
            col.name
              ? m.trust( col.name )
              : c.colConfig().flip().get(col)  //get name of the key of the column
          }</th>)
        } ) }
        </thead>
        <tbody>
        { c.files().sortBy( o => o.index ).map( file => {
          return (
            <tr>
            {c.listDataHeaders(file, c.colConfig()) }
          </tr>)
        } ).toJS() }
        </tbody>
      </table>
    </div>
  )
}

export default Table