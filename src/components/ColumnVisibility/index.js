import m from 'mithril'
import { connect } from './../../redux/mithril-redux'

import { toggleColumnView } from './../../redux/actions'

import styles from './index.css!'

let ColumnVisibility = {}

ColumnVisibility.controller = props => {
  let c = {}
  return c
}

ColumnVisibility.view = (c, props) => {

  const { columns, display } = props

  return (
    <div class={styles.spmenu_push} style={`display : ${display ? 'block' : 'none'};`}>
      <nav class={`${styles.spmenu} ${styles.spmenu_vertical} ${styles.spmenu_right} ${styles.spmenu_open}`}>
        <h3>Menu</h3>
        {
          columns
            .toList()
            .filter( x => x.get( 'toggle' ) )
            .sortBy( x => x.get( 'name' ) )
            .map( x =>
              <a class={ !x.get( 'visible' ) ? styles.active : '' }
                 onclick={ () => { dispatch( toggleColumnView( x.get('id') ) ) } }>
                { m.trust( x.get( 'name' ) ) }
              </a> ).toJS()
        }
      </nav>
    </div>
  )
}

export default ColumnVisibility
