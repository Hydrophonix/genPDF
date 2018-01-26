const express = require('express');
const router = express.Router();
const path = require('path');
const fileName = 'test2.pdf';
const phantom = require('phantom');
const fs = require('fs');
let data;

router.get('/', (req, res, next) => {
  console.log('get render');
  console.log(data);
  res.render('form', data);
});

router.post('/', (req, res, next) => {
  console.log('this is test');
  // res.render('index');
  console.log(req.body);
  data = req.body;
  pdf();
  // res.setHeader('Content-type', 'application/pdf');
  // res.sendFile(path.join(__dirname.replace('routes', ''), fileName));
  // const file = fs.readFileSync('./test2.pdf');
  // res.contentType("application/pdf");
  // res.send(file);
});

// async function () {
//  await pdf();
//  await
// }

//
const pdf = async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  page.property('paperSize', { format: 'A4', orientation: 'portrait' });

  const status = await page.open('http://localhost:3000/test');
  await page.render(fileName);
  console.log('created test2.pdf');
  // console.log(path.join(__dirname.replace('routes', ''), fileName));
  // await res.sendFile(fileName, { root : __dirname});
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
