const express = require('express');
const router = express.Router();
const path = require('path');
const fileName = 'test2.pdf';
const phantom = require('phantom');
let data;

router.get('/', (req, res, next) => {
  console.log('get render');
  console.log(data);
  res.render('form', data);
});

router.put('/', (req, res, next) => {
  console.log('this is test');
  // res.render('index');
  // console.log(req.body);
  data = req.body;
  pdf(res);
  // makePDF.next();
});


//
const pdf = async function(res) {
  const instance = await phantom.create();
  const page = await instance.createPage();
  page.property('paperSize', { format: 'A4', orientation: 'portrait' });

  const status = await page.open('http://localhost:3000/test');
  await page.render(fileName);
  console.log('created test2.pdf');
  console.log(__dirname.replace('routes', ''));
  // await res.sendFile(path.join(__dirname.replace('routes', ''), fileName));
  await instance.exit();
};

// function* pha() {
//   const instance = yield phantom.create();
//   makePDF.next();
//   console.log(instance);
//   const page = yield instance.createPage();
//   console.log(page);
//   page.property('paperSize', { format: 'A4', orientation: 'portrait' });
//
//   const status = yield page.open('http://localhost:3000/test');
//   yield page.render(fileName);
//   console.log('created test2.pdf');
//   yield instance.exit();
// }
//
// const makePDF = pha();





module.exports = router;
