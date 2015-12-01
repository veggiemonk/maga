import m from 'mithril'

// Components
import Filter from './filter'
import Menu   from './menu'
import Table  from './table'
import ColumnVisibility  from './columnVisibility'
import Header from './header'

let Body = {}

Body.controller = props => {

}

Body.view = (c, props) => {
    const state = props.store.getState()
    const { filters } = state
    return (
        <div>
        <Header />
        {
          filters.menuColumnView ? <ColumnVisibility store={props.store} /> : ''
        }
        <Filter store={props.store} />

        <Menu store={props.store}/>
        { 
          state.files.count() > 0
            ? <Table store={props.store}/>
            : 'Table not loaded yet --> show loader'
        }
        </div>
        )
}

export default Body
