import styles from './css/menu.css!'

import {filterMenuRef, filterMenuCat } from './redux/actions'

let Menu = {}

Menu.controller = function controller(props) {
  let c = {
    category:   props.category,
    menuFilter: props.menuFilter,
    store:      props.store,
  }
  return c
}

Menu.view = function view(c) {
  return (
      <div>

        <ul class='menu'>
          <li class={styles.menuRoot}
              onclick={() => {c.menuFilter({type: 'root'})}}>
            {'All Documents'}
          </li>
          {c.category().toList().map( cat => (
              <li class={styles.menuCatLi}>
            <span class={styles.menuCatSpan}
                  onclick={() => {c.store.dispatch( filterMenuCat(cat.get( 0 ).get( 'categoryNumber' ) ) ) } }>
              { cat.get( 0 ).get( 'categoryNumber' ) + '-' + cat.get( 0 ).get( 'labelCategoryFR' )}
            </span>
                <ul class={styles.menuRefDoc}>
                  { cat.toList().map( doc => (
                      <li class={styles.menuDocRefLi}
                          onclick={() => {c.store.dispatch( filterMenuRef(doc.get( 'referenceDocument' ) ) ) } }>
                  <span class={styles.menuDocRefSpan}>
                    { doc.get( 'referenceDocument' ) + ' - ' + doc.get( 'labelDocFR' )}
                  </span>
                      </li>
                  ) ).toJS()
                  }</ul>
              </li>
          ) ).toJS()}
        </ul>
      </div>
  )
}

export default Menu
