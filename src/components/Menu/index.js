import styles from './index.css!'

import {filterMenuRef, filterMenuCat, showAllDocument } from './../../redux/actions'

let Menu = {}
let LANG = 'fr' //TODO : i18n

/***
 *
 * @param item Immutable Object
 * @param lang language
 * @returns {*}
 */
export let labelCati18n = ( item, lang ) => {

  let cat = {
    fr:      () => item.get( 'labelCategoryFR' ),
    nl:      () => item.get( 'labelCategoryNL' ),
    de:      () => item.get( 'labelCategoryDE' ),
    default: () => item.get( 'labelCategoryX' ),
  }
  return (cat[ lang ] || cat[ 'default' ])()
}

const listRefDoc = ( listCat, cat ) =>
  listCat.filter( x => x.get( 'categoryNumber' ) === cat )
    .reduce( ( acc, next ) => {
      acc.push( next.get( 'referenceDocument' ) )
      return acc
    }, [] )

Menu.view = function view( c, props ) {
  const { category, files, dispatch } = props
  return (
    <div class={styles.main_div}>

      <ul class='menu'>
        <li class={styles.menuRoot}
            onclick={() => {dispatch(showAllDocument())}}>
          'All Documents' <span style='float: right;'>{ files.count() }</span>
        </li>
        {
          category && category.toList().map( cat => (
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
                  { cat.get( 0 ).get( 'categoryNumber' ) + '-' + labelCati18n( cat.get( 0 ), LANG ) }
                </span>
              <span>{ cat.get( 0 ).get( 'filesPerCat' ) }</span>
              <ul class={styles.menuRefDoc}>
                { cat.toList().map( doc => (
                  <li class={styles.menuDocRefLi} key={doc.get( 'referenceDocument' )}
                      onclick={() => {dispatch( filterMenuRef(doc.get( 'referenceDocument' ) ) ) } }>
                  <span class={styles.menuDocRefSpan}>
                    { doc.get( 'referenceDocument' ) + ' - ' + doc.get( 'labelDocFR' )}
                  </span>
                    <span>{ doc.get( 'filesPerRef' ) }</span>
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
        >'OTHERS' <span>{files.filter( x => x.get( 'referenceDocument' ) === '' ).count()}</span></li>
      </ul>
    </div>
  )
}

export default Menu
