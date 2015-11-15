import m from 'mithril'

let ColumnVisibility = {}

ColumnVisibility.controller = attrs => {
  let c = {
    columnHeader:     attrs.columnHeader,
    toggleVisibility: colId => {
      c.operation( //TODO: get it from somewhere
        c.columnHeader( c.columnHeader()
          .map( x =>
            x.get( 'id' ) === colId
              ? x.set( 'visible', !x.get( 'visible' ) )
              : x )
        ),
        'Toggle Visibility: ' + colId )
    },
  }
  return c
}

ColumnVisibility.view = c => (
  <ul style='display: inline-block;'>
    {
      c.columnHeader()
        .filter( x => x.get( 'toggle' ) )
        .map( x =>
          <li onclick={ () => { c.toggleVisibility( x.get('id') ) } }>
            { m.trust( x.get( 'name' ) ) }
          </li> ).toJS()
    }
  </ul>
)
export default ColumnVisibility