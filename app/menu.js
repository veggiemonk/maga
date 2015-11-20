import styles from './css/menu.css!'

var Menu = {}

Menu.controller = function controller (props, children) {
  let c = {
    category:   props.category,
    menuFilter: props.menuFilter,
  }
  return c
}

Menu.view = function view (c) {
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
                  onclick={() => {c.menuFilter({type: 'cat', val: cat.get( 0 ).get( 'categoryNumber' ) })}}>
              { cat.get( 0 ).get( 'categoryNumber' ) + '-' + cat.get( 0 ).get( 'labelCategoryFR' )}
            </span>
            <ul class={styles.menuRefDoc}>
              { cat.toList().map( doc => (
                <li class={styles.menuDocRefLi}
                    onclick={() => {c.menuFilter({type: 'doc', val: doc.get( 'referenceDocument' ) })}}>
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
