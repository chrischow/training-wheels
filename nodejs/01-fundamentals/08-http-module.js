const http = require('http');

/**
 * req: Request to server
 * res: Response we're sending back
 */
const server = http.createServer((req, res) => {
  res.write('Welcome to our home page.');
  res.end();
})

server.listen(5001);