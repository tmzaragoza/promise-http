module.exports = {
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive',
      // note: ['My favourite character']
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
