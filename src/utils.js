import m from 'mithril';
import moment from 'moment';

export const inc    = f => f( f() + 1 );
export const dec    = f => f( f() - 1 );
export const toggle = f => f( !f() );

export const getLastPage = ( totalFiles, rowDisplayed ) => {
  return Math.ceil( totalFiles / rowDisplayed );
};

export const getStartPageAt = ( totalFiles, rowDisplayed ) => {
  return ( (Math.ceil( totalFiles / rowDisplayed ) - 1) * rowDisplayed );
};

export const numberOfFilesDisplayed = ( totalFiles, rowDisplayed, startPageAt ) => {
  return Math.min( rowDisplayed, (totalFiles - startPageAt) );
};

export const parseErrorResponse = status => {
  if ( Number.isInteger( status ) ) {
    if ( status === 401 ) return 'Error unauthorized'; //TODO: replace by i18n
    else if ( status === 403 ) return 'Error Forbidden';
    else return 'unknown Error';
  } else {
    return 'Status is not a number';
  }
};

export const catchLoginError = error => {
  console.error( error );
  error.response && error.response.status
    ? dispatch(loginFailed(parseErrorResponse( error.response.status )))
    : dispatch( loginFailed( 'Error parsing status response:' + JSON.stringify( error ) ) );
};

/**
 *
 * @param date {string}
 * @returns {Moment || null}
 */
export const validateDate = (date) => {
  let dateError = false;
  if (!date) {
    return null;
  } //Invalide Date

  let sDate = date.split( /[.,\/ -]/ );
  let [sDay, sMonth, sYear] = sDate;
  if ( !sDay ) dateError = true;

  if (sMonth) {
    if ( isNaN( sMonth ) ) dateError = true;
  } else {
    sMonth = new Date().getMonth() + 1;
  }

  if (sYear) {
    if (isNaN(sYear)) {
      dateError = true;
    } else {
      if (sYear < 100) {
        if (sYear < 50) {
          sYear = 2000 + parseInt( sYear );
        } else {
          sYear = 1900 + parseInt( sYear );
        }
      }
    }
  } else {
    sYear = new Date().getFullYear(); // fix bug : if month = 0 and year = 0 -> month <> january
  }
  //console.log({year: sYear, month: sMonth - 1, day: sDay});
  const dateMoment = moment({
    year: sYear,
    month: sMonth - 1,
    day: sDay
  } );

  if ( !dateError && !dateMoment.isValid() ) dateError = true;

  return !dateError ? dateMoment /*.format( 'DD/MM/YYYY' ).toString()*/ : null;
};


/**
 * Make sure Mithril knows we updated something
 */
export const invalidate = () => {
  m.startComputation();
  m.endComputation();
};

/**
 * An easier way to bind an attribute to a getter/setter
 * @param setter
 * @param getterName
 * @example
 *
 *   <input oninput={m.bindValueTo(c.prop)} />
 */
m.bindValueTo = (setter, getterName) => m.withAttr( getterName || 'value', setter );

/**
 *
 * @param size
 * @returns {*}
 */
export let formatSize = size => {
  const val = parseInt( size );
  return val > 1024 ? Math.round( val / 1024 ) + ' KB' : val;
};

/***
 *
 * @param ext
 * @returns {*}
 */
export let formatExtension = ext => {

  if ( ext || ext !== '' ) {
    const v         = ext.toLowerCase();
    const extension = {
      pdf:     () => ('<span><i class="fa fa-file-pdf-o fa-lg" title="pdf"></i></span>'),
      zip:     () => ('<span><i class="fa fa-file-archive-o fa-lg" title="zip"></i></span>'),
      xls:     () => ('<span><i class="fa fa-file-excel-o fa-lg" title="xls"></i></span>'),
      dat:     () => ('<span><i class="fa fa-bar-chart fa-lg" title="dat"></i></span>'),
      csv:     () => ('<span><i class="fa fa-file-excel-o fa-lg" title="csv"></i></span>'),
      jpg:     () => ('<span><i class="fa fa-file-picture-o fa-lg" title="image"></i></span>'),
      png:     () => ('<span><i class="fa fa-file-picture-o fa-lg" title="image"></i></span>'),
      default: () => ('<span><i class="fa fa-file-o fa-lg"></i></span>'),
    };
    return (extension[ v ] || extension[ 'default' ])();
  } else {
    return '';
  }
};

/**
 * Function by takes a member name string and an
 * optional minor comparison function and returns
 * a comparison function that can be used to sort an
 * array of objects that contain that member. The
 * minor comparison function is used to break ties
 * when the o[name] and p[name] are equal.
 *
 * @returns {Function}
 */
const by = ( name, minor ) => {
  return ( o, p ) => {
    let a, b;
    if ( o && p && typeof o === 'object' && typeof p === 'object' ) {
      a = o[ name ];
      b = p[ name ];
      if ( a === b ) {
        return typeof minor === 'function' ? minor( o, p ) : 0;
      }
      if ( typeof a === typeof b ) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      throw {
        name:    'Error',
        message: 'Expected an object when sorting by ' + name
      };
    }
  };
};

