const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = express.Router();

const index = require('./routes/index');
const test = require('./routes/test');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/test', test);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, () =>
  console.log(`listening on http://localhost:${port}`));
