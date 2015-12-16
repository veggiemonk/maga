import m from 'mithril'
import Filter from '../Filter/index'
import Table from '../Table/index'
import ColumnVisibility from '../ColumnVisibility/index'

let Main = {}

Main.view = (c, props) => {
  const {filters, dispatch, files} = props
  return (
    <main class="Main">
      <ColumnVisibility display={filters.menuColumnView} {...props}/>
      <Filter {...props}/>
      <Table display={files.count() > 0} {...props} />
    </main>
  )
}

export default Main
