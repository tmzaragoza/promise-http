const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');
const {
  getCharacter,
  getCharacters
} = require('../lib/services/rickAndMortyApi');

const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
    if(url.method === 'GET' && pathname.includes('/characters/')) {
      const id = url.pathname.slice(1).split('/')[1];
      const notesForChar = notes[id][0];
      getCharacter(id)
      .then(character => {
        const noteItems = notesForChar
        .reduce((acc, note) => {
          acc+= `<li>${note}</li>`
          return acc;
        }, '');

        res.setHeader('Content-Type', 'text/html')
        res.end(`
            <html>
              <body>
                <li>
                  ${character.name}
                </li>
                <li>
                  ${noteItems}
                </li>
              </body>
            </html>
          `)
          res.statusCode = 200;
        })
    }
    else if(url.method === 'GET' && pathname.includes('/characters/')){
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
      console.log('here');
      bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;
        
        if(!notes[id]) {
          notes[id] = [];
        }
        notes[id].push[note];
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

}
