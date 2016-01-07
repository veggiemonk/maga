import m from 'mithril'

import { fetching } from './async'

// Components
import Login from './components/Login/index'
import Loader from './components/Loader/index'
import Menu from './components/Menu/index'
import Uploader from './components/Uploader/index'
import Filters from './components/Filters/index'
import Table from './components/Table/index'
import ColumnVisibility from './components/ColumnVisibility/index'

import {i18n} from './i18n'

import styles from './css/global.css!'

let App        = {}
App.controller = props => {
  //TODO: LOGIN and CREDENTIALS
  let c = {}
  //move async one level up
  fetching( props.store.dispatch )//.then( ()=> { console.log( 'LOADED...' )} )
  m.redraw.strategy( 'diff' )
  return c
}

const putTimestamp = (dispatch) => (action) => {
  action.receivedAt = _.now()
  dispatch(action)
}

App.view = ( c, props ) => {

  const state = props.store.getState()
  const { dispatch: origDispatch } = props.store
  const dispatch = putTimestamp(origDispatch)
  const {filters, files, isFetching, language, isAuthenticated} = state
  return (
    <div>
      <Login
        display={!isAuthenticated}
        dispatch={putTimestamp(dispatch)}
        i18n={i18n.login}
        language={language}/>
      <Loader display={isFetching}/>
      <aside class={styles.Aside}>
        <Uploader
          dispatch={putTimestamp(dispatch)}
          i18n={i18n.uploader}
          {...state}>
        </Uploader>
        <Menu
          dispatch={dispatch}
          i18n={i18n.menu}
          {...state}>
        </Menu>
      </aside>
      <main class={styles.Main}>
        <ColumnVisibility
          display={filters.menuColumnView}
          dispatch={putTimestamp(dispatch)}
          i18n={i18n.columnVisibility}
          {...state}>
        </ColumnVisibility>
        <Filters
          dispatch={putTimestamp(dispatch)}
          i18n={i18n.filters}
          {...state}>
        </Filters>
        <Table
          display={files.length > 0}
          dispatch={putTimestamp(dispatch)}
          i18n={i18n.table}
          {...state}>
        </Table>
      </main>
    </div>
  )
}

export default App
