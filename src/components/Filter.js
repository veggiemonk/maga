import m from 'mithril'
import {
    pageFirst,
    pageLast,
    pageNext,
    pagePrev,
    filterSearch,
    filterDateBegin,
    filterDateEnd,
    changeRowDisplayed,
    toggleMenuColumnView,
} from '../redux/actions'

//import styles from '../css/skeleton.css!'

let Header = {}

Header.controller = function controller(props, children) {
  let c = {
    store:     props.store,
    select:    val => {c.store.dispatch( changeRowDisplayed( Number( val ) ) ) },
    search:    val => {c.store.dispatch( filterSearch( val ) ) },
    dateBegin: val => {c.store.dispatch( filterDateBegin( val ) ) },
    dateEnd:   val => {c.store.dispatch( filterDateEnd( val ) ) },
    toggleMenuColumnView: () => {c.store.dispatch( toggleMenuColumnView() ) }
  }

  return c
}

Header.view = function view(c, props, children) {
  const state = props.store.getState()
  const count = state.data.count()
  return (
      <div class="container">
        <div class="row">
          <div class="three columns">
            <button class="button-primary">RELOAD</button>

            <input type="search"
                   incremental
                   oninput={ m.withAttr('value', c.search ) }
                   value={ state.filters.searchKeyword }
                   placeholder="Search Here"/>
            <input type="search"
                   oninput={ m.withAttr('value', c.dateBegin ) }
                   value={ state.filters.dateBegin }
                   placeholder="Date Begin"/>
            <input type="search"
                   oninput={ m.withAttr('value', c.dateEnd ) }
                   value={ state.filters.dateEnd }
                   placeholder="Date End"/>

            <input type="checkbox"
                   onclick={ m.withAttr('checked', c.toggleMenuColumnView ) }
                   checked={state.filters.menuColumnView} />
          </div>

          <div class="six columns">
            <button onclick={ () => { c.store.dispatch( pageFirst() )} }>
              <i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i>
            </button>

            <button onclick={ () => {  c.store.dispatch( pagePrev() )  } }>
              <i class="fa fa-chevron-left"></i>
            </button>

            <button onclick={ () => { c.store.dispatch( pageNext( count ) ) } }>
              <i class="fa fa-chevron-right"></i>
            </button>

            <button onclick={ () => { c.store.dispatch( pageLast() ) } }>
              <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i>
            </button>
          </div>

          <div class="three columns">

            <select
              name="select"
              onchange={ m.withAttr('value', c.select) }
              value={ c.select }>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value={count}>{count}</option>
            </select>
            <label for="rowDisplay"> # row to Display </label>
            <input type="range" min="1" max={ count } step="1"
                   oninput={ m.withAttr('value', c.select) }
                   name="rowDisplay" id="rowDisplay"
                   list="number"
                   value={ state.filters.rowDisplayed }/>
            <datalist id="number">
              <option>1</option>
              {[ , ...Array( Math.floor( count / 10 ) ) ].map( (x, i) =>
                  <option label={i * 10}>{i * 10}</option>
              )}
            </datalist>
          </div>
        </div>

        <div class="row">
          <div class="u-full-width center">
            <span>Showing: { Math.min(state.filters.rowDisplayed, count ) } files out of { count } (total: {state.files.count()})</span>
            <br />
            <span> Page: { state.filters.page } out of {Math.ceil( count / state.filters.rowDisplayed )}</span>
          </div>
        </div>

      </div>
  )
}

export default Header
