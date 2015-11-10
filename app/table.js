import m from 'mithril'

let Table = {};

Table.controller = function controller (attrs, children) {
  let c = {
    files:     attrs.files,
    colConfig: attrs.colConfig,
    listHeaders: cc => Array.from( cc.keys() )
  }
  return c;
}

Table.view = function view (c, attrs, children) {
  return (
    <div>
      <h2>Table</h2>
      <table>
        <thead>
        { c.listHeaders(c.colConfig).map(x => {
          const tmp = c.colConfig.get(x);
          return (<th>{ tmp.name ? m.trust(tmp.name) : x }</th>)
        } ) }
        </thead>
        <tbody>
        { c.files().sort(o => o.index).map( file => (
          <tr>
            { c.listHeaders(c.colConfig).map( col => {
              const tmp = c.colConfig.get(col);
              return (<td>{ tmp.content ? m.trust(tmp.content) : file[col]}</td>)
            } ) }
          </tr>
        ) ) }
        </tbody>
      </table>
    </div>
  )
}

export default Table