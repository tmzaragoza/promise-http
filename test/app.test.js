const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi.js');
  
describe('app', () => {
  it('saves a note to an object', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'My favourite character'})
      .then(res => {
        expect(res.status).toEqual(204);
      })
  })  
})