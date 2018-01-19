const page = require('webpage').create();

const fileName = 'test2.pdf';

// page.viewportSize = { width: 800, height: 600 };

page.paperSize = { format: 'A4', orientation: 'portrait' };

page.open('http://localhost:3000/', function() {

  page.render(fileName);
  phantom.exit();
});
