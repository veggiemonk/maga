import m from 'mithril'

let Table = {};

Table.controller = function controller (attrs, children) {
  let c = {
    files:     attrs.files,
    colConfig: attrs.colConfig
  }
  //console.log( c.colConfig )
  return c;
}

Table.view = function view (ctrl, attrs, children) {
  return (
    <div>
      <h2>Table</h2>
      <table>
        <thead>
        { Object.keys( ctrl.colConfig.toObject() ).map( col => (
          <th>{col}</th>
        ) ) }
        </thead>
        <tbody>
        { ctrl.files().sort(o => Number(o.index)).map( file => (
          <tr>
            { Object.keys( ctrl.colConfig.toObject() ).map( col => {
              //console.log(col);
              const tmp = ctrl.colConfig.get(col);
              if (tmp.content) return (<td>{m.trust(tmp.content)}</td>)
              else return (<td>{file[col]}</td>)
            } ) }
          </tr>
        ) ) }
        </tbody>
      </table>
    </div>
  )
}

export default Table