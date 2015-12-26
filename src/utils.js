import m from 'mithril'

export const stackLoader   = m.prop( 0 )
export const isLoading     = () => stackLoader() > 0
export const loaderDisplay = () => isLoading() ? 'display: block' : 'display: none'
export const inc           = f => f( f() + 1 )
export const dec           = f => f( f() - 1 )
export const toggle        = f => f( !f() )

export const getLastPage = (totalFiles, rowDisplayed) => {
  return Math.ceil( totalFiles / rowDisplayed )
}

export const getStartPageAt = (totalFiles, rowDisplayed) => {
  return ( (Math.ceil( totalFiles / rowDisplayed ) - 1) * rowDisplayed )
}

export const numberOfFilesDisplayed = (totalFiles, rowDisplayed, startPageAt) => {
  return Math.min( rowDisplayed, (totalFiles - startPageAt) )
}

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

/**
 *
 * @param size
 * @returns {*}
 */
export let formatSize = size => {
  const val = parseInt( size )
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
      pdf:     () => ('<span><i class="fa fa-file-pdf-o fa-lg" title="pdf"></i></span>'),
      zip:     () => ('<span><i class="fa fa-file-archive-o fa-lg" title="zip"></i></span>'),
      xls:     () => ('<span><i class="fa fa-file-excel-o fa-lg" title="xls"></i></span>'),
      dat:     () => ('<span><i class="fa fa-bar-chart fa-lg" title="dat"></i></span>'),
      csv:     () => ('<span><i class="fa fa-file-excel-o fa-lg" title="csv"></i></span>'),
      jpg:     () => ('<span><i class="fa fa-file-picture-o fa-lg" title="image"></i></span>'),
      png:     () => ('<span><i class="fa fa-file-picture-o fa-lg" title="image"></i></span>'),
      default: () => ('<span><i class="fa fa-file-o fa-lg"></i></span>'),
    }
    return (extension[ v ] || extension[ 'default' ])()
  } else {
    return ''
  }
}

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
    let a, b
    if ( o && p && typeof o === 'object' && typeof p === 'object' ) {
      a = o[ name ]
      b = p[ name ]
      if ( a === b ) {
        return typeof minor === 'function' ? minor( o, p ) : 0
      }
      if ( typeof a === typeof b ) {
        return a < b ? -1 : 1
      }
      return typeof a < typeof b ? -1 : 1
    } else {
      throw {
        name:    'Error',
        message: 'Expected an object when sorting by ' + name
      }
    }
  }
}

