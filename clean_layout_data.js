const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'LayoutData.js');
console.log(`Reading: ${filePath}`);
let content = fs.readFileSync(filePath, 'utf-8');

// Use regex to strip out all script tags from the exported HTML strings
// Regex matches <script> tags case-insensitively, including attributes and contents
const cleaned = content.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (match) => {
  console.log(`Removing script block: ${match.substring(0, 100)}...`);
  return '';
});

fs.writeFileSync(filePath, cleaned, 'utf-8');
console.log('Successfully cleaned all legacy script tags from LayoutData.js!');
