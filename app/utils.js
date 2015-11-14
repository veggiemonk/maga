import m from 'mithril'

/**
 * Make sure Mithril knows we updated something
 */
export const invalidate = () => {
  m.startComputation()
  m.endComputation()
}

/***
 *
 * @param f function to be executed inside and start/endComputation
 * @returns f()
 * @example
 *
 */
export const compute = ( f ) => {

  try {
    inc( stackLoader )
    m.startComputation()
    return f()
  } finally {
    dec( stackLoader )
    m.endComputation()
  }
}

/**
 * An easier way to bind an attribute to a getter/setter
 * @param setter
 * @param getterName
 * @example
 *
 *   <input oninput={m.bindValueTo(c.prop)} />
 */
m.bindValueTo = ( setter, getterName ) => m.withAttr( getterName || 'value', setter )

export const stackLoader = m.prop( 0 )
export const isLoading   = () => stackLoader() > 0
export const inc         = f => f( f() + 1 )
export const dec         = f => f( f() - 1 )
export const toggle      = f => f( !f() )

/***
 * @param: value (String), obj (Object)
 * @returns: True if value is contained in at least one of the own prop of obj
 *           False otherwise
 * */
export let searchInObject = ( value, obj ) => {
  const regex = new RegExp( value, 'i' )
  for ( var prop in obj ) {
    if ( obj.hasOwnProperty( prop )

        //&& model.configCol().get( prop ).searchable //TODO !!!
      && regex.test( obj[ prop ] ) ) {
      return true
    }
  }
}
/***
 *
 * @param item
 * @returns {*}
 */
export let labelDocI18n   = item => {

  let doc = {
    fr:      () => item.labelDocFR,
    nl:      () => item.labelDocNL,
    de:      () => item.labelDocDE,
    default: () => item.labelDocX,
  }
  return (doc[ lang ] || doc[ 'default' ])()
}

/***
 *
 * @param item
 * @returns {*}
 */
export let labelCati18n = item => {

  let cat = {
    fr:      () => item.labelCategoryFR,
    nl:      () => item.labelCategoryNL,
    de:      () => item.labelCategoryDE,
    default: () => item.labelCategoryX,
  }
  return (cat[ lang ] || cat[ 'default' ])()
}

/**
 *
 * @param size
 * @returns {*}
 */
export let formatSize = size => {
  var val = parseInt( size )
  return val > 1024 ? Math.round( val / 1024 ) + ' KB' : val
}

/***
 *
 * @param ext
 * @returns {*}
 */
export let formatExtension = ext => {

  if ( ext || ext !== '' ) {
    let v         = ext.toLowerCase()
    let extension = {
      pdf:     () => (' <span><i class="fa fa-file-pdf-o fa-lg" title="pdf"></i></span>'),
      zip:     () => (' <span><i class="fa fa-file-archive-o fa-lg" title="zip"></i></span>'),
      xls:     () => (' <span><i class="fa fa-file-excel-o fa-lg" title="xls"></i></span>'),
      dat:     () => (' <span><i class="fa fa-bar-chart fa-lg" title="dat"></i></span>'),
      csv:     () => (' <span><i class="fa fa-file-excel-o fa-lg" title="csv"></i></span>'),
      jpg:     () => (' <span><i class="fa fa-file-picture-o fa-lg" title="image"></i></span>'),
      png:     () => (' <span><i class="fa fa-file-picture-o fa-lg" title="image"></i></span>'),
      default: () => (' <span><i class="fa fa-file-o fa-lg"></i></span>'),
    }
    return (extension[ v ] || extension[ 'default' ])()
  } else {
    return ''
  }
}

export function loaderDisplay() {
  return isLoading() ? 'display: inline-block' : 'display: none'
}
