const http = require('http');

const server = http.createServer();

// Use event emitter API
// There are many other events
server.on('request', (req, res) => {
  res.end('Welcome');
  console.log(`GET ${req.url}`);
})

server.listen(5001, () => {
  console.log(`Server listening on port 5001 at http://localhost:5001/...`);
});

