/* eslint-disable prettier/prettier */
const fs = require('fs');
const path = require('node:path'); 

const filePath = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(filePath, 'utf8');

readStream.on('data', (text) => {
  console.log('text file', text);
});
