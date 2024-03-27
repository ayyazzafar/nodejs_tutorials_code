

const request = require('supertest');


const app = require('../server');

describe('User API', () => {
    it('should get all user', async ()=>{
        const res = await request(app).get('/users');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    }, 30000)


    it('should create a user', async ()=>{
        const res = await request(app).post('/users').send({
            name: 'John Doe',
            email: 'john@gmail.com',
            password: 'password' 
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    }
    , 30000)

});