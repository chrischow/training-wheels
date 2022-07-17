const http = require('http');

const server = http.createServer((req, res) => {
  // Log request
  if (req.url === '/') {
    res.end('Welcome to our home page, man.');
  } else if (req.url === '/about') {
    res.end('Here is the about page.');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <a href="/">Back to Home</a>
    `)
  }
})

console.log(`Started server on http://localhost:5001/`);
server.listen(5001);