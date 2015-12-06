'use strict'
let express = require( 'express' )
let connect = require('connect')
let fs      = require( 'fs' )
//let app     = express()
let app     = connect()
//const cors = require('cors');
//const http = require( 'http' )
const http = require( 'http2' )

const port = 3001
//app.use(cors());

/* serves main page */
app.get( '/', function (req, res) {
  res.sendFile( 'index.html' )
} )

/* serves all the static files */
let path = require( 'path' )
app.use( express.static( path.join( process.cwd(), '' ) ) )

let cache = 3600
if ( process.env.NODE_ENV === 'production' ) {
  console.log( 'running in production mode(with caching)-make sure you have "Disable cache (while DevTools is open)" checked in the browser to see the changes while developing' )
} else {
  cache = -1
  console.log( 'DON\'T FORGET TO ADD: sessionStorage.HOT = true IN THE BROWSER CONSOLE TO USE HOT MODULE RELOADING' )
}

let httpServer = http.createServer( {
  root:               './',
  cache:              cache,
  robots:             true,
  plain:              true,
  key:                fs.readFileSync( './test/localhost.key' ),
  cert:               fs.readFileSync( './test/localhost.crt' ),
  requestCert:        false,
  rejectUnauthorized: false,
  headers:            {
    'Access-Control-Allow-Origin':      '*',
    'Access-Control-Allow-Credentials': 'true'
  }
}, app )

require( 'chokidar-socket-emitter' )(
  {
    app:      httpServer,
    chokidar: {
      ignored: /(node_modules|jspm_packages|\.git|.idea)/
    }
  } )

let p = process.env.PORT || port
httpServer.listen( process.env.PORT || port,
  () => { console.log( 'Express server listening on port', p ) }
)
