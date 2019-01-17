const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');
const { 
  getCharacter,
  getCharacters
} = require('../lib/services/rickAndMortyApi');

const notes = {};

  module.exports = (req, res) => {
    const url = parse(req.url, true);
    console.log('in write path');
    if(url.pathname.includes('/characters/')){
      const id = url.pathname.slice(1).split('/')[1];
      getCharacter(id)
        .then(character => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(character));
        })
        .catch(err => {
          res.statusCode = 500;
          res.end(`Error ${err}`);
        })
    }

    else if(req.method === 'POST' && url.pathname === '/characters') {
      bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;
        if(notes[id]) {
          notes[id].push(note);
        }
        else {
          notes[id] = [note];
        }
        res.statusCode = 204;
        res.end();
      });
    } 
    else if(url.pathname.includes('/characters')){
      bodyParser(req)
      getCharacters()
        .then(characters => { 
          let html = '';
          characters.map(character => {
            html += `<li>${character.name}</li>`});
          res.setHeader('Content-Type', 'text/html')
          res.end(`<html><body>${html}</body></html>`);
        })
        .catch(err => {
          res.statusCode = 500;
          res.end(`Error ${err}`);
        })
    }
    
    else if(url.pathname.includes('/characters/')&& req.method === 'GET') {
      const id = url.pathname.slice(1).split('/')[1];
      const note = notes[id][0];    
      bodyParser(req)  
      getCharacter(id) 
      .then(character => {
          res.write(`
            <html>
              <body>
                <li>
                  ${character.name}
                </li>
                <li>
                  ${character.species}
                </li>
                <li>
                  ${character.status}
                </li>
                <li>
                  ${note}
                </li>
              </body>
            </html>
          `)
          res.statusCode = 200;
          res.end();
        })
    }
} 
