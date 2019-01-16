const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');
const { 
  getCharacter,
  getCharacters
} = require('../lib/services/rickAndMortyApi');


// let noteId = 0;
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
// module.exports = (req, res) => {
  // const url = parse(req.url, true);
  // if(req.method === 'POST' && url.pathname === '/notes'){
  //   bodyParser(req)
  //   .then(body => {
  //     notes[noteId++] =  body;
  //     res.statusCode = 204;
  //     res.end();
  //   });
  // } 
  // module.exports = (req, res) => {
  //   const url = parse(req.url, true);
  //   if(url.pathname.includes('/character/')){

  //     const id = url.pathname.slice(1).split('/')[1];
  //     getCharacter(id)
  //       .then(character => {
  //         res.setHeader('Content-Type', 'application/json')
  //         res.end(JSON.stringify(character));
  //       })
  //       .catch(err => {
  //         res.statusCode = 500;
  //         res.end(`Error ${err}`);
  //       })
  //   }
  // module.exports = (req, res) => {
  //   const url = parse(req.url, true);
  //   if(url.pathname.includes('/characters')){
  //     // const id = url.pathname.slice(1).split('/')[1];
  //     bodyParser(req)
  //     getCharacters()
  //       .then(characters => { 
  //         let html = '';
  //         characters.map(character => {
  //           html += `<li>${character.name}</li>`});
  //         res.setHeader('Content-Type', 'text/html')
  //         res.end(`<html><body>${html}</body></html>`);
  //       })
  //       .catch(err => {
  //         res.statusCode = 500;
  //         res.end(`Error ${err}`);
  //       })
  //   }
  module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/characters'){
    bodyParser(req)
    .then(body => {
      console.log('body', body);
      const id = body.characterId;
      const note = body.note;
      if(notes[id]) {
      }
      else {
        notes[id] =[];
        notes[id].push(note);
      }
      res.statusCode = 204;
      res.end();
    });
  } 
  } 



