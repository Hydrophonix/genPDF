const page = require('webpage').create();
const system = require('system');
const fs = require('fs');

    page.paperSize = { format: 'A4', orientation: 'portrait' };

    // This will fix some things that I'll talk about in a second
    // page.settings.dpi = "96";

    page.content = fs.read(system.args[1]);

    var output = system.args[2];

    window.setTimeout(function () {
        page.render(output, {format: 'pdf'});
        phantom.exit(0);
    }, 500);
