const request = require('supertest');
import '@babel/polyfill';
const app = require('../server/server');

describe('Test server functionality', () => {
    test('Test post method', async () => {
        const response = await request(app).post('/results');
        expect(response.statusCode).toBe(200);
    });
});