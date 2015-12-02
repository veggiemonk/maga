import m from 'mithril'

import { toggleColumnView } from './../redux/actions'

import styles from '../css/visibleColumn.css!'

let ColumnVisibility = {}

ColumnVisibility.controller = props => {
  let c = {
    store:     props.store,
  }
  return c
}

ColumnVisibility.view = c => {

  const { columns } = c.store.getState()

  return (
    <div class={styles.spmenu_push}>
      <nav class={`${styles.spmenu} ${styles.spmenu_vertical} ${styles.spmenu_right} ${styles.spmenu_open}`}>
        <h3>Menu</h3>
        {
          columns
            .toList()
            .filter( x => x.get( 'toggle' ) )
            .sortBy( x => x.get( 'name' ) )
            .map( x =>
              <a class={ !x.get( 'visible' ) ? styles.active : '' }
                onclick={ () => { c.store.dispatch( toggleColumnView( x.get('id') ) ) } }>
                { m.trust( x.get( 'name' ) ) }
              </a> ).toJS()
        }
      </nav>
    </div>
  )
}

export default ColumnVisibility
