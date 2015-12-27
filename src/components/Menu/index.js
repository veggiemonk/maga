import _ from 'lodash'
import styles from './menu.css!'

import {filterMenuRef, filterMenuCat, showAllDocument } from './../../redux/actions'

let Menu = {}
const lang = 'fr' //TODO : i18n

/***
 *
 * @param item Object containing the `lang` key (language)
 * @param lang language
 * @returns {*}
 */
export let labelCati18n = ( item, lang ) => {

  let cat = {
    fr:      () => item[ 'labelCategoryFR' ],
    nl:      () => item[ 'labelCategoryNL' ],
    de:      () => item[ 'labelCategoryDE' ],
    default: () => item[ 'labelCategoryX' ],
  }
  return (cat[ lang ] || cat[ 'default' ])()
}

const listRefDoc = ( listCat, cat ) =>
  _(listCat)
    .filter( x => x[ 'categoryNumber' ] === cat )
    .reduce( ( acc, next ) => {
      acc.push( next[ 'referenceDocument' ] )
      return acc
    }, [] )

Menu.view = function view( c, props ) {
  const { category, files, dispatch, i18n } = props
  const root = (
    <li class={styles.menuRoot}
        onclick={() => {dispatch(showAllDocument())}}>
    {i18n.all[lang]} <span style='float: right;'>{ files.length }</span>
  </li>
  )
  const others = (
    <li
    class={styles.menuCatLi}
    onclick={() => { dispatch(filterMenuRef(''))} }>
    {i18n.others[lang]} <span>{files.filter( x => x[ 'referenceDocument' ] === '' ).length}</span>
  </li>
  )
  const catego = (
    _(category).map( cat => (
      <li class={styles.menuCatLi} key={_(cat).get( [0 , 'categoryNumber'] )}>
                <span class={styles.menuCatSpan}
                      onclick={() => {
                        dispatch(
                          filterMenuCat(
                            listRefDoc( cat, _(cat).get( [0 , 'categoryNumber'] ) )
                          )
                        )
                      }
                }>
                  { _(cat).get( [0 , 'categoryNumber'] ) + '-' + labelCati18n( cat[0], lang ) }
                </span>
        <span>{ _(cat).get( [0, 'filesPerCat'] ) }</span>
        <ul class={styles.menuRefDoc}>
          { _(cat).map( doc => (
            <li class={styles.menuDocRefLi} key={doc['referenceDocument']}
                onclick={() => {dispatch( filterMenuRef(doc['referenceDocument'] ) ) } }>
                  <span class={styles.menuDocRefSpan}>
                    { doc[ 'referenceDocument' ] + ' - ' + doc['labelDoc'+lang.toUpperCase()]}
                  </span>
              <span>{ doc['filesPerRef'] }</span>
            </li>
          ) ).value()
          }
        </ul>
      </li>
    ) ).value()
  )

  return (
    <div class={styles.main_div}>
      <ul class={styles.menu}>
        {root}
        {catego}
        {others}
      </ul>
    </div>
  )
}

export default Menu
