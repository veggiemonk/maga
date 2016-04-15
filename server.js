'use strict'

const httpServer = require( 'http-server' )

let cache = 3600
if ( process.env.NODE_ENV === 'production' ) {
  console.log( 'running in production mode(with caching)-make sure you have "Disable cache (while DevTools is open)" checked in the browser to see the changes while developing' )
} else {
  cache = -1
  console.log( 'DON\'T FORGET TO ADD: sessionStorage.HOT = true IN THE BROWSER CONSOLE TO USE HOT MODULE RELOADING' )
}
//TODO: create a route like '/echo/json' same as jsfiddle
// use express!!!
const server = httpServer.createServer( {
  root:    './',
  cache:   cache,
  robots:  true,
  headers: {
    'Access-Control-Allow-Origin':      '*',
    'Access-Control-Allow-Credentials': 'true'
  }
} )
require( 'chokidar-socket-emitter' )(
  {
    app: server.server,
    chokidar: {
      ignored: /(node_modules|jspm_packages|\.git|.idea)/
    }
  } )

server.listen( process.env.PORT || 3000 )
