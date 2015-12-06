import m from 'mithril'

// Components
import Filter from './components/Filter/index'
import Menu   from './components/Menu/index'
import Table  from './components/Table/index'
import ColumnVisibility  from './components/ColumnVisibility/index'
import Uploader from './components/Uploader/index'

let Body = {}

Body.controller = props => {

}

Body.view = ( c, props ) => {
  const state = props.store.getState()
  const { filters } = state
  return (
    <div>
      {
        filters.menuColumnView ? <ColumnVisibility store={props.store} /> : ''
      }
      <Filter store={props.store} />
      <Uploader store={props.store} />
      <Menu store={props.store} />
      {
        state.files.count() > 0
          ? <Table store={props.store} />
          : 'Table not loaded yet --> show loader'
      }
    </div>
  )
}

export default Body
