/* eslint-disable prettier/prettier */
const fs = require('fs');
const readline = require('readline');
const path = require('node:path');

const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath, { flags: 'a' }); 

console.log('Приветственное сообщение');


// eslint-disable-next-line no-undef
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    // eslint-disable-next-line no-undef
    writeStream.end();
    rl.close();
  } else {
    // eslint-disable-next-line no-undef
    writeStream.write(input + '\n');
  }
});
  
rl.on('close', () => {
  console.log('Прощальное сообщение');
});

process.on('qqq', () => {
  // eslint-disable-next-line no-undef
  writeStream.end();
  rl.close();
  process.exit();
});