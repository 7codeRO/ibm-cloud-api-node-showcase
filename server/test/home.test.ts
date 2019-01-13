import request from 'supertest';
import app from '../src/app';
import { API_BASE } from '../src/config';

describe('POST /getUrlCategory', () => {

    it('should return validation errors on invalid fields', async () => {
        const response = await request(app)
            .post(`${API_BASE}/getUrlCategory`)
            .send({'url': 'invalid-url'});

        expect(response.status).toEqual(422);
        expect(response.body).toEqual([{'location': 'body', 'msg': 'URL is not valid', 'param': 'url', 'value': 'invalid-url'}]);
    });

    it('should return 200 OK', async () => {
        const response = await request(app)
            .post(`${API_BASE}/getUrlCategory`)
            .send({'url': 'http://7code.ro'});

        expect(response.status).toEqual(200);
        expect(response.body).toHaveProperty('score');
        expect(response.body).toHaveProperty('label');
    });
});
