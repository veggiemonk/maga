import m from 'mithril'
import {
    pageFirst,
    pageLast,
    pageNext,
    pagePrev,
    filterSearch,
    filterDateBegin,
    filterDateEnd,
} from './redux/actions'

let Header = {}

Header.controller = function controller(props, children) {
  let c = {
    store:     props.store,
    search:    val => {c.store.dispatch( filterSearch( val ) )},
    dateBegin: val => {c.store.dispatch( filterDateBegin( val ) )},
    dateEnd:   val => {c.store.dispatch( filterDateEnd( val ) )},
  }

  return c
}

Header.view = function view(c, props, children) {
  const state = props.store.getState()
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

          </div>

          <div class="six columns">
            <button onclick={ () => { c.store.dispatch( pageFirst() )} }>
              <i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i>
            </button>

            <button onclick={ () => {  c.store.dispatch( pagePrev() )  } }>
              <i class="fa fa-chevron-left"></i>
            </button>

            <button onclick={ () => { c.store.dispatch( pageNext( state.data.count() ) ) } }>
              <i class="fa fa-chevron-right"></i>
            </button>

            <button onclick={ () => { c.store.dispatch( pageLast() ) } }>
              <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i>
            </button>
          </div>

          <div class="three columns">

            <input type="text" style="width: 50px;"
                   value={ state.filters.rowDisplayed }/>

            <select name="select">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="all">ALL</option>
            </select>
            <label for="rowDisplay"> # row to Display </label>
            <input type="range" min="1" max={ state.data.count() } step="1"
                   name="rowDisplay" id="rowDisplay"
                   list="number"
                   value={ state.filters.rowDisplayed }/>
            <datalist id="number">
              <option>1</option>
              {[ , ...Array( Math.floor( state.data.count() / 10 ) ) ].map( (x, i) =>
                  <option label={i * 10}>{i * 10}</option>
              )}
            </datalist>
          </div>
        </div>

        <div class="row">
          <div class="u-full-width center">
            <span>Showing: { state.filters.rowDisplay } files out of { state.data.count()}</span>
            <br />
            <span> Page #: { state.filters.page }
              out of {Math.ceil( state.data.count() / state.filters.rowDisplayed )}</span>
          </div>
        </div>

      </div>
  )
}

export default Header
