const express = require('express');
const router = express.Router();
// const { apiVersion } = require('./methods/index.js');

router.get('/', (req, res, next) => {
  console.log('this is index');
  res.render('index2');
});

module.exports = router;
