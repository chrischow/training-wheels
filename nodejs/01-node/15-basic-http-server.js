const http = require('http');
const { readFileSync } = require('fs');

// Get all files
const homePage = readFileSync('./static/index.html');
const homeStyles = readFileSync('./static/styles.css');

const server = http.createServer();

server.on('request', (req, res) => {
  const url = req.url;
  console.log(`[${(new Date()).toISOString()}] ${req.method} ${url} ${res.statusCode}`);

  // Home page
  if (url === '/') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write(homePage);
    res.end();
  }
  // Static resource: styles
  // Need to do the same for JS logic, images, etc.
  else if (url === '/styles.css') {
    res.writeHead(200, {
      'content-type': 'text/css'
    });
    res.write(homeStyles);
    res.end();
  }
  // About page
  else if (url === '/about') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write(`
      <h1>About Page</h1>
      <p>About content</p>
    `);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, {
      'content-type': 'text/html'
    });
    res.write('<h1>Page not found</h1>');
  }

});

server.listen(5001, () => {
  console.log('Server started on port 5001...');
});