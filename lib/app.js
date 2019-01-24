const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');
const {
  getCharacter,
  getCharacters
} = require('../lib/services/rickAndMortyApi');

const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);

  if(req.method === 'GET' && url.pathname === '/characters'){
    console.log('line 14');
    getCharacters()
      .then(characters => {
        let html = '';
        characters.map(character => {
          html += `<li>${character.name}</li>`;});
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>${html}</body></html>`);
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }
  else if(req.method === 'GET' && url.pathname === '/characters/') {
    console.log('line 28');
    const id = url.pathname.slice(1).split('/')[1];
    const notesForChar = notes[id][0];
    getCharacter(id)
      .then(character => {
        const noteItems = notesForChar
          .reduce((acc, note) => {
            acc += `<li>${note}</li>`;
            return acc;
          }, '');

        res.setHeader('Content-Type', 'text/html');
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
          `);
        res.statusCode = 200;
      });
  }
  // else if(req.method === 'GET' && url.pathname.includes('/characters/')){
    
  //   console.log('here');
  //   const id = url.pathname.slice(1).split('/')[1];
  //   getCharacter(id)
  //     .then(character => {
  //       res.setHeader('Content-Type', 'application/json');
  //       res.end(JSON.stringify(character));
  //     })
  //     .catch(err => {
  //       res.statusCode = 500;
  //       res.end(`Error ${err}`);
  //     });
  // }

  else if(req.method === 'POST' && url.pathname.includes('/characters/')) {
    bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;
      
        if(!notes[id]) {
          notes[id] = [];
        }
        notes[id].push(note);
        res.statusCode = 204;
        res.end();
        console.log('notes', notes);
      });
  }
  else if(req.method === 'GET' && url.pathname.includes('/characters/')){
    console.log('line 86');
    const id = url.pathname.slice(1).split('/')[1]; 
    getCharacter(id)
      .then(() => {
        let html = '';
        notes[id].map(note => {
          html += `<li>${note}</li>`;});
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>${html}</body></html>`);
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }

};
