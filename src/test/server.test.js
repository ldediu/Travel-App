const request = require('supertest');
import '@babel/polyfill';
const app = require('../server/server');

describe('Test server functionality', () => {
    test('Test get method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
    test('Test post method', async () => {
        const response = await request(app).post('/results');
        expect(response.statusCode).toBe(200);
    });
});