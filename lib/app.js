const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');
const getCharacter = require('../lib/services/rickAndMortyApi');

let noteId = 0;
const notes = {};

// module.exports = (req, res) => {
//   const url = parse(req.url).pathname;
//   if(url === '/tester') {
//     res.setHeader( 'Content-Type', 'application/json')
//     res.end(JSON.stringify({ 'testing123' }));
//   } 
// };

// module.exports = (req, res) => {
//   const url = parse(req.url).pathname;
//   if(url === '/tester') {
//     res.setHeader( 'Content-Type', 'application/json')
//     res.end(JSON.stringify({ testing: 123 }));
//   } 
// };
// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   console.log(url);
//   if(url.search === `?name=${url.query.name}`) {
//     res.setHeader( 'Content-Type', 'application/json')
//     res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
//   } 
// };
module.exports = (req, res) => {
  // const url = parse(req.url, true);
  // if(req.method === 'POST' && url.pathname === '/notes'){
  //   bodyParser(req)
  //   .then(body => {
  //     notes[noteId++] =  body;
  //     res.statusCode = 204;
  //     res.end();
  //   });
  // } 

};


