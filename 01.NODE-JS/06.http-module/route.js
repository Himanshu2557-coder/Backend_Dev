const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log('Request URL:', url);

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (url === '/') {
    res.end('Hello, World from HTTP module');
  } else if (url === '/about') {
    res.end('About Page');
  } else if (url === '/contact') {
    res.end('Contact Page');
  } else {
    res.end('404 Not Found');
  }

  console.log('Response sent for URL:', url);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
