import {pageFirst, pageLast, pageNext, pagePrev} from './redux/actions'

let Header = {}

Header.controller = function controller(props, children) {
  let c = {
    store: props.store,
    filesTotal: props.filesTotal,
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
                   placeholder="Search Here"/>

          </div>

          <div class="six columns">
            <button onclick={ () => { c.store.dispatch( pageFirst() )} }>
              <i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i>
            </button>

            <button onclick={ () => {  c.store.dispatch( pagePrev() )  } }>
              <i class="fa fa-chevron-left"></i>
            </button>

            <button onclick={ () => { c.store.dispatch( pageNext( c.filesTotal().count() ) ) } }>
              <i class="fa fa-chevron-right"></i>
            </button>

            <button onclick={ () => { c.store.dispatch( pageLast() ) } }>
              <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i>
            </button>
          </div>

          <div class="three columns">

            <input type="text" style="width: 50px;"
                   value={ state.filters.rowDisplayed }/>

            <label for="rowDisplay"> # row to Display </label>
            <input type="range" min="1" max={ c.filesTotal().count() } step="1"
                   name="rowDisplay" id="rowDisplay"
                   list="number"
                   value={ state.filters.rowDisplayed }/>
            <datalist id="number">
              <option>1</option>
              {[ , ...Array( Math.floor( c.filesTotal().count() / 10 ) ) ].map( (x, i) =>
                  <option label={i * 10}>{i * 10}</option>
              )}
            </datalist>
          </div>
        </div>

        <div class="row">
          <div class="u-full-width center">
            <span>Showing: { state.filters.rowDisplay } files</span>
            <br />
            <span> Page #: { state.filters.page }</span>
          </div>
        </div>

      </div>
  )
}

export default Header
