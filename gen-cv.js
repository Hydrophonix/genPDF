const page = require('webpage').create();

const fileName = 'VMikoliuk CV.pdf';

// page.settings.dpi = "96";
// page.zoomFactor = 1;
// page.viewportSize = { width: 794, height: 1123 };
// page.paperSize = {
//   format: 'A4',
//   orientation: 'portrait'
// };
page.zoomFactor = 96/72;
page.paperSize = {
  width: '210mm',
  height: '297mm',
  margin: {
    top: '0mm',
    right: '0mm',
    bottom: '0mm',
    left: '0mm'
  },
  border: '0mm',
};

page.open('http://localhost:8080/cv', function() {

  page.render(fileName);
  phantom.exit();
});
