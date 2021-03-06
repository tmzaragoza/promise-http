const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi.js');
  
describe('app', () => {
  it('writes list of characters', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toEqual('<html><body><li>Rick Sanchez</li><li>Morty Smith</li></body></html>');
      });
  });
  it('saves a note to a character', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'My favourite character' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
  it.only('displays a character by id and all notes about them', () => {
    return request(app)
      .post('/characters/')
      .send({ characterId: 1, note: 'BEST' })
      .then(() => {
        return request(app)
          .get('/characters/1');
      })
      .then(res => {
        expect(res.text).toContain('BEST');
      });
  });
});
