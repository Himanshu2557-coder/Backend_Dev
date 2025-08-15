const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('data folder created');
  
}

const filePath = path.join(dataFolder, 'example.txt');

// synchronous file write
fs.writeFileSync(filePath, 'Hello, world!');
console.log('File written successfully'); 

const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log('File content:', fileContent);

fs.appendFileSync(filePath, '\nAppended content');
console.log('File updated successfully');

// async way
const asyncFilePath = path.join(dataFolder, 'async-example.txt');

fs.writeFile(asyncFilePath, 'Hello, async world!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Async file written successfully');

  fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('Async file content:', data);

    fs.appendFile(asyncFilePath, '\nAppended async content', (err) => {
      if (err) {
        console.error('Error updating file:', err);
        return;
      }
      console.log('Async file updated successfully');
    });
  });
});