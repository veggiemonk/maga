var Table = {};

Table.controller = function controller( attrs, children ) {
  var c = {
    files: attrs.files
  }
  console.log( new Date().getMilliseconds() )
  console.log( c.files() )

  return c;
}

Table.view = function view( ctrl, attrs, children ) {
  return (
    <div>
      <h2>Table</h2>
      <table>
        { ctrl.files().map( file => {
          return (<tr>
            <td>{file.path}</td>
            <td>{file.id}</td>
          </tr>)
        } ) }

      </table>
    </div>
  )
}

export default Table