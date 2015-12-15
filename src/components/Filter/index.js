import m from 'mithril'
import rome from 'rome'
import { connect } from '../../redux/mithril-redux'
import { fetching } from '../../async'
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
  refreshData,
} from '../../redux/actions'

//import styles from '../../css/skeleton.css!'

let Filter = {}

Filter.controller = function controller( props ) {
  const { dispatch } = props
  return {
    select:               val => {dispatch( changeRowDisplayed( Number( val ) ) ) },
    search:               val => {dispatch( filterSearch( val ) ) },
    dateBegin:            val => {
      dispatch( filterDateBegin( val ) )
    },
    dateEnd:              val => {
      dispatch( filterDateEnd( val ) )
    },
    toggleMenuColumnView: () => {dispatch( toggleMenuColumnView() ) }
  }
}

Filter.config = ctrl => ( element, isInitialized, context ) => {
  if ( !isInitialized ) {
    rome( document.querySelector( '#dateBegin' ), {
      autoHideOnBlur: true,
      inputFormat: 'DD/MM/YYYY',
    } )
  }
}

Filter.view = function view( c, props, children ) {
  const { dispatch, filters, data, files } = props
  const count = data.count()
  return (
    <div class="container">
      <div class="row">
        <div class="three columns">
          <button
            class="button-primary"
            onclick={() => { fetching(dispatch); m.startComputation(); m.endComputation() }}
            >RELOAD</button>

          <input id="search"
                 type="search"
                 incremental
                 oninput={ m.withAttr('value', c.search ) }
                 value={ filters.searchKeyword }
                 placeholder="Search Here"/>

          <input id="dateBegin"
                 type="search"
                 config={Filter.config(c)}
                 oninput={ m.withAttr('value', c.dateBegin ) }
                 value={ filters.dateBegin }
                 placeholder="Date Begin"/>

          <input id="dateEnd"
                 type="search"
                 oninput={ m.withAttr('value', c.dateEnd ) }
                 value={ filters.dateEnd }
                 placeholder="Date End"/>

          <input type="checkbox"
                 onclick={ m.withAttr('checked', c.toggleMenuColumnView ) }
                 checked={filters.menuColumnView}/>
        </div>

        <div class="six columns">
          <button onclick={ () => { dispatch( pageFirst() )} }>
            <i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i>
          </button>

          <button onclick={ () => { dispatch( pagePrev() )  } }>
            <i class="fa fa-chevron-left"></i>
          </button>

          <button onclick={ () => { dispatch( pageNext( count ) ) } }>
            <i class="fa fa-chevron-right"></i>
          </button>

          <button onclick={ () => { dispatch( pageLast() ) } }>
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
                 value={ filters.rowDisplayed }/>
          <datalist id="number">
            <option>1</option>
            {[ , ...Array( Math.floor( count / 10 ) ) ].map( ( x, i ) =>
              <option label={i * 10}>{i * 10}</option>
            )}
          </datalist>
        </div>
      </div>

      <div class="row">
        <div class="u-full-width center">
          <span>Showing: { Math.min( filters.rowDisplayed, count ) } files out of { count }
                (total: {files.count()})</span>
          <br />
          <span> Page: { filters.page } out of {Math.ceil( count / filters.rowDisplayed )}</span>
        </div>
      </div>

    </div>
  )
}

export default Filter
