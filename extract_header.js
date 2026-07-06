const fs = require('fs');
const path = require('path');
const { headerHtml } = require('./components/LayoutData.js');

fs.writeFileSync(path.join(__dirname, 'extracted_header.html'), headerHtml, 'utf-8');
console.log('Done!');
