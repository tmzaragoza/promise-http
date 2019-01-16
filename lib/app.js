const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');

const notes = {};

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



