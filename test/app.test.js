const request = require('supertest');
const app = require('../lib/app');

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
  it('has a tester route',() => {
    return request(app)
      .post('./notes')
      .send({ text: 'I"m a note' })
      .then(res => {
        expect(res.status).toEqual(204);
      })
  })
})