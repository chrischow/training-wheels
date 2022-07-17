const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  const fileStream = fs.createReadStream('./dummy/big.txt', {
    highWaterMark: 32000,
    encoding: 'utf8'
  });
  fileStream.on('open', () => {
    // Pushes data from read stream into write stream
    fileStream.pipe(res)
  });
})

server.on('error', (error) => {
  res.end(error);
})

server.listen(5001, () => {
  console.log(`Server listening on port 5001 at http://localhost:5001/...`);
});