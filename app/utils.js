import m from 'mithril'

export const stackLoader = m.prop( 0 )

export function isLoading () {
  return stackLoader() > 0
}

export const inc    = f => f( f() + 1 );
export const dec    = f => f( f() - 1 );
export const toggle = f => f( !f() );

/***
 * @param: value (String), obj (Object)
 * @returns: True if value is contained in at least one of the own prop of obj
 *           False otherwise
 * */
export let searchInObject = (value, obj) => {
  const regex = new RegExp( value, 'i' );
  for ( var prop in obj ) {
    if ( obj.hasOwnProperty( prop )
        //&& model.configCol().get( prop ).searchable //TODO !!!
      && regex.test( obj[prop] ) ) {
      return true;
    }
  }
}

export let labelDocI18n = function (item) {

  let doc = {
    fr     : () => item.labelDocFR,
    nl     : () => item.labelDocNL,
    de     : () => item.labelDocDE,
    default: () => item.labelDocX
  };
  return (doc[lang] || doc['default'])();
};

export let labelCati18n = function (item) {
  let cat = {
    fr     : () => item.labelCategoryFR,
    nl     : () => item.labelCategoryNL,
    de     : () => item.labelCategoryDE,
    default: () => item.labelCategoryX
  };
  return (cat[lang] || cat['default'])();
};

export let formatSize = function (value) {
  var val = parseInt( value );
  if ( val > 1024 ) { return Math.round( val / 1024 ) + ' KB';}
  else { return val; }
};

export let formatExtension = function (value) {

  if ( value || value !== '' ) {
    let v         = value.toLowerCase()
    let extension = {
      pdf:     () => (<span><i class="fa fa-file-pdf-o fa-lg" title="pdf"></i></span>),
      zip:     () => (<span><i class="fa fa-file-archive-o fa-lg" title="zip"></i></span>),
      xls:     () => (<span><i class="fa fa-file-excel-o fa-lg" title="xls"></i></span>),
      dat:     () => (<span><i class="fa fa-bar-chart fa-lg" title="dat"></i></span>),
      csv:     () => (<span><i class="fa fa-file-excel-o fa-lg" title="csv"></i></span>),
      jpg:     () => (<span><i class="fa fa-file-picture-o fa-lg" title="image"></i></span>),
      png:     () => (<span><i class="fa fa-file-picture-o fa-lg" title="image"></i></span>),
      default: () => (<span><i class="fa fa-file-o fa-lg"></i></span>)
    };
    return (extension[v] || extension['default'])();
  } else { return '' }
}

export function loaderDisplay () {
  return isLoading() ? 'display: inline-block' : 'display: none'
}