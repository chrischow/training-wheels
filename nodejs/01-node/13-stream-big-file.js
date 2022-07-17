const { createReadStream } = require('fs');

const stream = createReadStream('./dummy/big.txt', {
  highWaterMark: 32000,
  encoding: 'utf8'
});

stream.on('data', (chunk) => {
  console.log(chunk);
});

stream.on('error', (error) => console.log(error));