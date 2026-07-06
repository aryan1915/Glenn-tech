const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'styles', 'globals.css');
const content = fs.readFileSync(cssPath, 'utf-8');
const lines = content.split('\n');

const searchTerms = ['header', 'dropdown', 'menu', 'nav'];

lines.forEach((line, index) => {
  const matches = searchTerms.some(term => line.toLowerCase().includes(term));
  if (matches) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
