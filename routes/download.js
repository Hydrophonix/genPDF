const express = require('express');
const router = express.Router();
const path = require('path');
const fileName = 'test2.pdf';
// const phantom = require('phantom');
// const fs = require('fs');

router.get('/', (req, res, next) => {
  console.log('get download');
  res.download(__dirname, filename);
});
