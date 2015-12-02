import styles from '../css/menu.css!'

import {filterMenuRef, filterMenuCat, resetView } from './../redux/actions'

let Menu = {}

Menu.controller = function controller(props) {

}

//TODO : i18n
const listRefDoc = (listCat, cat) =>
  listCat.filter( x => x.get( 'categoryNumber' ) === cat)
    .reduce((acc, next) => {
      acc.push(next.get('referenceDocument'))
      return acc
    }, [])


Menu.view = function view(c, props) {

  const state = props.store.getState()
  const dispatch = props.store.dispatch
  return (
      <div class={styles.main_div}>

        <ul class='menu'>
          <li class={styles.menuRoot}
              onclick={() => {dispatch(resetView())}}>
            'All Documents' <span style='float: right;'>{ state.files.count() }</span>
          </li>
            {
              state.category && state.category.toList().map( cat => (
              <li class={styles.menuCatLi} key={cat.get( 0 ).get( 'categoryNumber' )}>
                <span class={styles.menuCatSpan}
                      onclick={() => {
                        dispatch(
                          filterMenuCat(
                            listRefDoc( cat, cat.get( 0 ).get( 'categoryNumber' ) )
                          )
                        )
                      }
                }>
                  { cat.get( 0 ).get( 'categoryNumber' ) + '-' + cat.get( 0 ).get( 'labelCategoryFR' )}
                </span>
                <span>{ cat.get( 0 ).get('filesPerCat') }</span>
                <ul class={styles.menuRefDoc}>
                  { cat.toList().map( doc => (
                      <li class={styles.menuDocRefLi} key={doc.get( 'referenceDocument' )}
                          onclick={() => {dispatch( filterMenuRef(doc.get( 'referenceDocument' ) ) ) } }>
                  <span class={styles.menuDocRefSpan}>
                    { doc.get( 'referenceDocument' ) + ' - ' + doc.get( 'labelDocFR' )}
                  </span>
                  <span>{ doc.get('filesPerRef') }</span>
                      </li>
                  ) ).toJS()
                  }
                </ul>
              </li>
          ) ).toJS()
}
        <li
          class={styles.menuCatLi}
          onclick={() => { dispatch(filterMenuRef(''))} }
        >'OTHERS' <span>{state.files.filter(x => x.get('referenceDocument') === '').count()}</span></li>
        </ul>
      </div>
  )
}

export default Menu
