import m from 'mithril'

import { toggleColumnView } from './../../redux/actions'

import styles from './index.css!'

let ColumnVisibility = {}

ColumnVisibility.view = (c, props) => {

  const { columns, display, dispatch } = props

  return (
    <div class={styles.spmenu_push} style={`display : ${display ? 'block' : 'none'};`}>
      <nav class={`${styles.spmenu} ${styles.spmenu_vertical} ${styles.spmenu_right} ${styles.spmenu_open}`}>
        <h3>Columns</h3>
        {
          columns
            .toList()
            .filter( x => x[ 'toggle' ] )
            .sortBy( x => x[ 'name'] )
            .map( x =>
              <a class={ !x[ 'visible' ] ? styles.active : '' }
                 onclick={ () => { dispatch( toggleColumnView( x['id'] ) ) } }>
                { m.trust( x[ 'name' ] ) }
              </a> ).toJS()
        }
      </nav>
    </div>
  )
}

export default ColumnVisibility
