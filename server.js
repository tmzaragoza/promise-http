const http = require('http');
const app = require('./lib/app');

http.createServer(app)
  .listen(7890);
  


// http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html')
//   res.end(`<html><head><title> Welcome </title></head><body><h1>Thanks for visiting!<h1></body></html>`)
// }).listen(7890);

// http.createServer((req, res) => {
//    const url = parse(req.url).pathname;
//     if(url === '/birthday') {
//       // res.setHeader('Content-Type', 'text/html')
//       res.end(`<html><head><title> Birthday </title></head><body><h1>Happy Birthday!<h1></body></html>`)
//     }
//     else if(url === '/tomorrow') {
//       res.end(`<html><head><title> Welcome </title></head><body><h1>Tomorrow Tomorrow!<h1></body></html>`)
//     }
//     else if(url === 'birthday/tomorrow'){
//       res.end(`<html><head><title> Welcome </title></head><body><h1>Tomorrow is your birthday!<h1></body></html>`)
//     }
//     else {
//       res.statusCode = 404;
//       res.end('NOT FOUND')
//     }
//   }).listen(7890);


