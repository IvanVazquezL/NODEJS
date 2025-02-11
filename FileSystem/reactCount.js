const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');
const wordCount = data.split(' ').length;
const reactCount = data.match(/React/ig).length;

console.log(wordCount);
console.log(reactCount);