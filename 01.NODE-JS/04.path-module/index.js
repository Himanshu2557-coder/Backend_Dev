const path = require('path');
console.log('directory name:', path.dirname(__filename) );
 
console.log('file name:', path.basename(__filename) );

console.log('extension name:', path.extname(__filename) );

const filePath = path.join(__dirname, 'test.txt');
console.log('full file path:', filePath);

const resolvedPath = path.resolve(__dirname, 'test.txt');
console.log('resolved file path:', resolvedPath);

const normalizedPath = path.normalize('/foo/bar//baz/asdf/quux/..');
console.log('normalized file path:', normalizedPath);