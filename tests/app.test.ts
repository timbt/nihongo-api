import request from 'supertest';
import app from '../src/app';

describe('Test the root path', () => {
  test('It should respond to the the root method.', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toMatch(/Hello world/);
        done();
      });
  });
});
