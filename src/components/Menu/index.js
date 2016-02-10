import _ from 'lodash';
import styles from './menu.css!';

import {filterMenuRef, filterMenuCat, showAllDocument } from './../../redux/actions';

let Menu   = {};

/***
 *
 * @param item Object containing the `lang` key (language)
 * @param lang language
 * @returns {*}
 */
export let labelCati18n = ( item, lang ) => {
  let cat = {
    en:      () => item[ 'labelCategoryX' ],
    fr:      () => item[ 'labelCategoryFR' ],
    nl:      () => item[ 'labelCategoryNL' ],
    de:      () => item[ 'labelCategoryDE' ],
    default: () => item[ 'labelCategoryX' ],
  };
  return (cat[ lang ] || cat[ 'default' ])();
};

/**
 * @returns an array containing all the document's reference in a category
 * */
const listRefDoc = ( listCat, cat ) =>
  _( listCat )
    .filter( x => x[ 'categoryNumber' ] === cat )
    .reduce( ( acc, next ) => {
      acc.push( next[ 'referenceDocument' ] );
      return acc;
    }, [] );

Menu.view = function view( c, props ) {
  const { category, files, dispatch, i18n, language } = props;
  const i = k => i18n.t( k, { lng: language } );

  const root   = (
    <li class={styles.menuRoot}
        onclick={() => {dispatch(showAllDocument());}}>
      {i( 'listAll' )} <span class={styles.badge}>{ files.length }</span>
    </li>
  );
  const others = (
    <li
      class={styles.catLi}
      onclick={() => { dispatch(filterMenuRef(''));} }>
      {i( 'tree.other' )} <span
      class={styles.badge}>{files.filter( x => x[ 'referenceDocument' ] === '' ).length}</span>
    </li>
  );
  const catego = (
    _( category ).map( cat => (
      <li class={styles.catLi} key={_(cat).get( [0 , 'categoryNumber'] )}>
                <span class={styles.catSpan}
                      onclick={() => {
                        dispatch(
                          filterMenuCat(
                            listRefDoc( cat, _(cat).get( [0 , 'categoryNumber'] ) )
                          )
                        );
                      }
                }>
                  { _( cat ).get( [ 0, 'categoryNumber' ] ) + '-' + labelCati18n( cat[ 0 ], language ) }
                </span>
        <span class={styles.badge}>{ _( cat ).get( [ 0, 'filesPerCat' ] ) }</span>
        <ul class={styles.refDoc}>
          { _( cat ).map( doc => (
            <li class={styles.docLi} key={doc['referenceDocument']}
                onclick={() => {dispatch( filterMenuRef(doc['referenceDocument'] ) ); } }>
                  <span class={styles.docSpan}>
                    { doc[ 'referenceDocument' ] + ' - ' + doc[ 'labelDoc' + language.toUpperCase() ]}
                  </span>
              <span></span>
              <span class={styles.badge}>{ doc[ 'filesPerRef' ] }</span>
            </li>
          ) ).value()
          }
        </ul>
      </li>
    ) ).value()
  );

  return (
    <div class={styles.main_div}>
      <ul class={styles.menu}>
        {root}
        {catego}
        {others}
      </ul>
    </div>
  );
};

export default Menu;
