import m from 'mithril'

export const stackLoader = m.prop( 0 )

export function isLoading() {
  return stackLoader() > 0
}

export const inc = f => f( f() + 1 );
export const dec = f => f( f() - 1 );
export const toggle = f => f( !f() );

/***
 * @param: value (String), obj (Object)
 * @returns: True if value is contained in at least one of the own prop of obj
 *           False otherwise
 * */
export let searchInObject = ( value, obj ) => {
  const regex = new RegExp( value, 'i' );
  for ( var prop in obj ) {
    if ( obj.hasOwnProperty( prop )
        //&& model.configCol().get( prop ).searchable //TODO !!!
      && regex.test( obj[ prop ] ) ) {
      return true;
    }
  }
}

export function loaderDisplay() {
  return isLoading() ? 'display: inline-block' : 'display: none'
}