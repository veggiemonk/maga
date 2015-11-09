/*'use strict';
var express = require('express');
var app = express();
const chokidarSocketEmitter = require('chokidar-socket-emitter');
//const cors = require('cors');
const http = require('http')

let port = 3000
//app.use(cors());

/!* serves main page *!/
app.get("/", function(req, res) {
  res.sendfile('index.html')
});

/!* serves all the static files *!/
let path = require('path');
app.use(express.static(path.join(process.cwd(), '')));


let httpServer = http.createServer(app);
chokidarSocketEmitter({
  app: httpServer,
  path: './',
  relativeTo: './'
});
let p = process.env.PORT || port;
httpServer.listen(p, function() {
  console.log('Express server listening on port', p);
});*/

'use strict'
const httpServer = require('http-server')

let cache = 3600
if (process.env.NODE_ENV === 'production') {
  console.log('running in production mode(with caching)-make sure you have "Disable cache (while DevTools is open)" checked in the browser to see the changes while developing')
} else {
  cache = -1
}
const server = httpServer.createServer({
  root: './',
  cache: cache,
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})
require('chokidar-socket-emitter')({app: server.server})

server.listen(3000)