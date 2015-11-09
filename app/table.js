var Table = {};

Table.controller = function controller (attrs, children) {
  var c = {
    files: attrs.files,
    colConfig: attrs.colConfig
  }
  return c;
}

Table.view = function view (ctrl, attrs, children) {
  return (
    <div>
      <h2>Table</h2>
      <table>
        { ctrl.files().map( file =>
          <tr>
            <td>{file.path}</td>
          </tr>
        ) }
      </table>
    </div>
  )
}

export default Table