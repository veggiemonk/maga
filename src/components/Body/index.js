import m from 'mithril'

// Components
import Filter from './../Filter/index'
import Menu   from './../Menu/index'
import Table  from './../Table/index'
import ColumnVisibility  from './../ColumnVisibility/index'
import Uploader from './../Uploader/index'

let Body = {}

Body.controller = props => {

}

Body.view = (c, props) => {
  //const { state } = props
  const { filters, files } = props
  return (
    <div>
      {
        filters.menuColumnView ? <ColumnVisibility /> : ''
      }
      <Filter  />
      <Uploader />
      <Menu  />
      {
        files.count() > 0
          ? <Table  />
          : 'Table not loaded yet --> show loader'
      }
    </div>
  )
}

export default Body
