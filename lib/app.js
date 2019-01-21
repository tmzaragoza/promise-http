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

  // else if(url.method === 'GET' && url.pathname.includes('/characters/')) {
  //   const id = url.pathname.slice(1).split('/')[1];
  //   const notesForChar = notes[id][0];
  //   bodyParser(req);
  //   getCharacter(id)
  //     .then(character => {
  //       const noteItems = notesForChar
  //         .reduce((acc, note) => {
  //           acc += `<li>${note}</li>`;
  //           return acc;
  //         }, '');

  //       res.setHeader('Content-Type', 'text/html');
  //       res.end(`
  //           <html>
  //             <body>
  //               <li>
  //                 ${character.name}
  //               </li>
  //               <li>
  //                 ${noteItems}
  //               </li>
  //             </body>
  //           </html>
  //         `);
  //       res.statusCode = 200;
  //     });
  // }
  else if(url.method === 'GET' && url.pathname.includes('/characters/')){
    const id = url.pathname.slice(1).split('/')[1];
    const charNote = notes[id];
    getCharacter(id)
      .then(character => {
        const noteItems = charNote
          .reduce((acc, note) => {
            acc += `<li>${note}</li>`;
          }, '');
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>
          <h1>${character.name}</h1>
          <ul>
           ${noteItems}
          <ul>
         </body></html>`);
      });
    
  }


    //    .catch(err => {
    //     res.statusCode = 500;
    //     res.end(`Error ${err}`);
    // }); 
  

  
};

// //   else if(url.pathname.includes('/characters'))
// //     getCharacters()
// //       .then(characters => 
// //         let html = '';
// //         characters.map(character => {
// //           html += `<li>${character.name}</li>`;});
// //         res.setHeader('Content-Type', 'text/html');
// //         res.end(`<html><body>${html}</body></html>`);
// //       })
// //       .catch(err => {
// //         res.statusCode = 500;
// //         res.end(`Error ${err}`);
// //       });
// //   }


