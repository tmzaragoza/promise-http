const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi.js');
  
describe('app', () => {
  // it('has a tester route', () => {
  //   return request(app)
  //     .get('/tester')
  //     .then(res => {
  //       expect(res.body).toEqual({ testing: 123 })
  //     })
  // })
  // it('name', () => {
  //   return request(app)
  //     .get('/you?name=teonna')
  //     // .query('{ name: teonna }')
  //     .then(res => {
  //       expect(res.body).toEqual({ hi: `there teonna` })
  //     })
  // }) 
  // it('has a tester route',() => {
  //   return request(app)
  //     .post('/notes')
  //     .send({ text: 'I"m a note' })
  //     .then(res => {
  //       expect(res.status).toEqual(204);
  //     })
  // })
  // it('writes list of characters', () => {
  //   return request(app)
  //   .get('/characters')
  //   .then(res => {
  //     expect(res.text).toEqual(`<html><body><li>Rick Sanchez</li><li>Morty Smith</li></body></html>`);
  //   });
  // });
  it('saves a note to an object', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'My favourite character'})
      .then(res => {
        expect(res.status).toEqual(204);
      })
  })  
})