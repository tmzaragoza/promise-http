const http = require('http');

// http.createServer((req, res) => {
//   console.log('request incoming')
//   res.end('hi there');
// }).listen(7890);

http.createServer((req, res) => {
  res.setHeader( 'Content-Type', 'text/html')
  res.end(`<html><head><title> Welcome </title></body><body>Thanks for visiting!</body></html>`)
}).listen(7890);


// * use `http.createServer` to create a new http server
// * respond to each request with "<html><body>Thanks for visiting!</body></html>"
//   * HINT: set your content type `res.setHeader('Content-Type', 'text/html')
// * `listen` on port 7890