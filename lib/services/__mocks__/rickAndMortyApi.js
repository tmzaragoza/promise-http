module.exports = {
  getCharcter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  }
};