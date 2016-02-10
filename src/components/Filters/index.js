import m from 'mithril';
import _ from 'lodash';
//import rome from 'rome'
import { fetching } from '../../async';

import Button from '../Button/index';
import Input from '../Input/index';

import styleCB from '../../css/checkbox.css!';
import styleR from '../../css/radio.css!';
import styles from './filters.css!';

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
  setLanguage,
} from '../../redux/actions';


let Filters = {};

Filters.controller = function controller( props ) {
  const { dispatch } = props;
  return {
    select:               val => {dispatch( changeRowDisplayed( Number( val ) ) ); },
    search:               val => {dispatch( filterSearch( val ) ); },
    dateBegin:            val => {dispatch( filterDateBegin( val ) ); },
    dateEnd:              val => {dispatch( filterDateEnd( val ) ); },
    toggleMenuColumnView: () => {dispatch( toggleMenuColumnView() ); }
  };
};

Filters.config = ctrl => ( element, isInitialized, context ) => {
  /*if ( !isInitialized ) {
    rome( document.querySelector( '#dateBegin' ), {
      autoHideOnBlur: true,
      inputFormat:    'DD/MM/YYYY',
    } )
  }*/
};
//todo breadcrumbs
Filters.view = function view( c, props, children ) {
  const { dispatch, i18n, language, filters, data, files } = props;
  const count = data.length;
  return (
    <div class="container">
      <div class="row">
        <div class="three columns">
          <Button
            onclick={ () => { fetching(dispatch); } }>
            <i class="fa fa-2x fa-refresh">
            </i>
            {i18n.reload[ language ]}
          </Button>

          <Input type="search"
                 incremental
                 oninput={ m.withAttr('value', c.search ) }
                 value={ filters.searchKeyword }
                 placeholder={i18n.search[language]}/>

          <Input id="dateBegin"
                 type="search"
                 config={Filters.config(c)}
                 onchange={ m.withAttr('value', c.dateBegin ) }
                 value={ filters.dateBegin }
                 placeholder={i18n.dateBegin[language]}/>

          <Input id="dateEnd"
                 type="search"
                 onchange={ m.withAttr('value', c.dateEnd ) }
                 value={ filters.dateEnd }
                 placeholder={i18n.dateEnd[language]}/>
        </div>
        <div class={`${styleCB.squaredFour}`}>
          <input type="checkbox"
                 name="squaredFour"
                 onclick={ (e) => {console.log(e);} /*m.withAttr('checked', c.toggleMenuColumnView )*/ }
                 checked={filters.menuColumnView}/>
          <label
            for="squaredFour"
            onclick={ m.withAttr('checked', c.toggleMenuColumnView ) /*(e) => {console.log(e)}*/ }>
          </label>
          <p>{i18n.colVisible[ language ]}</p>
        </div>

        <div class="six columns">
          <Button onclick={ () => { dispatch( pageFirst() );} }>
            <i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i>
          </Button>

          <Button onclick={ () => { dispatch( pagePrev() );  } }>
            <i class="fa fa-chevron-left"></i>
          </Button>

          <Button onclick={ () => { dispatch( pageNext( count ) ); } }>
            <i class="fa fa-chevron-right"></i>
          </Button>

          <Button onclick={ () => { dispatch( pageLast() ); } }>
            <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i>
          </Button>
          {/**************************** LANGUAGE ****************************/}
          <div class={`${styles.grid}`}>
            <div class={`${styles.col_1_3} `}>
              <input class={`${styleR.input}`} type="radio" id="radio1" name="en"
                     checked={language.toLowerCase() === 'en'}/>
              <label class={`${styleR.label}`} for="radio1"
                     onclick={() => {dispatch(setLanguage('en'));}}>
                <span></span>
                EN
              </label>
            </div>
            <div class={`${styles.col_1_3}`}>
              <input class={`${styleR.input}`} type="radio" id="radio2" name="fr"
                     checked={language.toLowerCase() === 'fr'}/>
              <label class={`${styleR.label}`} for="radio2"
                     onclick={() => {dispatch(setLanguage('fr'));}}>
                <span></span>
                FR
              </label>
            </div>
            <div class={`${styles.col_1_3}`}>
              <input class={`${styleR.input}`} type="radio" id="radio3" name="nl"
                     checked={language.toLowerCase() === 'nl'}/>
              <label class={`${styleR.label}`} for="radio3"
                     onclick={() => {dispatch(setLanguage('nl'));}}>
                <span></span>
                NL
              </label>
            </div>
          </div>

        </div>
        {children}
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
            {_( [ , ...Array( Math.floor( count / 10 ) ) ] ).map( ( x, i ) =>
              <option label={i * 10}>{i * 10}</option>
            ).value()}
          </datalist>
        </div>
      </div>

      <div class="row">
        <div class="u-full-width center">
          <span>Showing: { Math.min( filters.rowDisplayed, count - filters.startPageAt ) } files out of { count }
            (total: {files.length})</span>
          <br />
          <span> Page: { filters.page } out of {Math.ceil( count / filters.rowDisplayed )}</span>
        </div>
      </div>

    </div>
  );
};

export default Filters;
