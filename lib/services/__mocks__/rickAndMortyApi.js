module.exports = {
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  },
  getCharacters() {
    return Promise.resolve([
      { 
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
      },
      {
      name: 'Morty Smith',
      species: 'Human',
      status: 'Alive'
      }

    ]);
  }
};


//  getCharacters = () => {
//   return request
//     .get(`https://rickandmortyapi.com/api/character`)
//     .then(res => {
//       const json = res.body;
//       const results = json.results;
//       return results.map(char => ({
//         name: char.name,
//         species: char.species,
//         status: char.status
//       }));
//     });
// }
