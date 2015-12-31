import mocha from 'mocha'

const files = [ 'test/redux.test.js', 'test/utils.test.js' ]

function multiImport( modules ) {
  return Promise.all( modules.map( ( m ) => System.import( m ) ) )
}

multiImport( files ).then( function () {
  mocha.checkLeaks()
  mocha.run()
} ).catch( function ( err ) {
  console.error( 'Error loading test modules' )
  console.error( err )
} )

mocha.setup( 'tdd' )
