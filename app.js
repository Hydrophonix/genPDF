// Core
const http = require('http');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const index = require('./routes/index');
const test = require('./routes/test');
// const download = require('./routes/download');


const httpServer = http.createServer(app);
const port = 8080;
const address = '172.16.151.61';
const family = 4;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/test', test);
// app.use('/download', download);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// dns.lookup('akt.pdf', (err, address, family) => {
//   console.log(`address: ${address} family: ${family}`);
// });

httpServer.listen({ port, address, family }, () =>
  console.log(`listening on http://localhost:${port}`));
