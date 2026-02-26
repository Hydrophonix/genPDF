const page = require('webpage').create();

const fileName = 'resume.pdf';

// page.viewportSize = { width: 800, height: 600 };

page.paperSize = { format: 'A4', orientation: 'portrait' };

page.open('http://localhost:8080/test', function() {

  page.render(fileName);
  phantom.exit();
});
