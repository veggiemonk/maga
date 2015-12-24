import m from 'mithril'
import { fromJS as toImmutable } from 'immutable'

import { fetching } from './async'

// Components
import Loader from './components/Loader/index'
import Menu from './components/Menu/index'
import Uploader from './components/Uploader/index'
import Filter from './components/Filter/index'
import Table from './components/Table/index'
import ColumnVisibility from './components/ColumnVisibility/index'

import styles from './css/global.css!'

let App        = {}
App.controller = props => {
  //TODO: LANGUAGE!!!
  //TODO: LOGIN and CREDENTIALS
  let c = {}
  //console.log('fetching, dispatch = ', props.dispatch)
  fetching( props.store.dispatch ).then( ()=> { console.log( 'LOADED...' )} )

  return c
}

App.view = ( c, props ) => {

  const state = props.store.getState()
  const { dispatch } = props.store
  const {filters, files, isFetching} = state
  return (
    <div>
      <Loader display={isFetching}/>
      <aside class={styles.Aside}>
        <Uploader dispatch={dispatch} {...state}/>
        <Menu dispatch={dispatch} {...state} />
      </aside>
      <main class={styles.Main}>
        <ColumnVisibility display={filters.menuColumnView} dispatch={dispatch} {...state}/>
        <Filter dispatch={dispatch} {...state}/>
        <Table display={files.count() > 0} dispatch={dispatch} {...state} />
      </main>
    </div>
  )
}

export default App
