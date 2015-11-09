'use strict';
var express = require('express');
var app = express();
const chokidarSocketEmitter = require('chokidar-socket-emitter');
//const cors = require('cors');
const http = require('http')

let port = 3000
//app.use(cors());

/* serves main page */
app.get("/", function(req, res) {
  res.sendfile('index.html')
});

/* serves all the static files */
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
});