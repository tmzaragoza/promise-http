const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      return {
        name: res.body.name,
        status: res.body.status,
        species: res.body.species
      };
    });
};

const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      const json = res.body;
      const results = json.results;
      return results.map(char => ({
        name: char.name,
        species: char.species,
        status: char.status
      }));
    });
};

module.exports = {
  getCharacter,
  getCharacters
};
