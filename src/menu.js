import styles from './css/menu.css!'

import {filterMenuRef, filterMenuCat, resetView } from './redux/actions'

let Menu = {}

Menu.controller = function controller(props) {
  let c = {
    category:   props.category,
    store:      props.store,
  }
  return c
}
//TODO : i18n
Menu.view = function view(c) {

  const listRefDoc = (listCat, cat) => 
    listCat.filter( x => x.get( 'categoryNumber' ) === cat)
      .reduce((acc, next) => {
        acc.push(next.get('referenceDocument'))
        return acc
      }, [])
      
  const state = c.store.getState()
  return (
      <div class={styles.main_div}>

        <ul class='menu'>
          <li class={styles.menuRoot}
              onclick={() => {c.store.dispatch(resetView())}}>
            'All Documents'
          </li>
          {state.category.toList().map( cat => (
              <li class={styles.menuCatLi}>
            <span class={styles.menuCatSpan}
                  onclick={() => {
                    c.store.dispatch( 
                      filterMenuCat( 
                        listRefDoc( cat, cat.get( 0 ).get( 'categoryNumber' ) ) 
                      )
                    ) 
                  } 
            }>
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
