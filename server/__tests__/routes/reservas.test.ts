
import express from 'express';
import request from 'supertest';
import {reservasRoute} from '../../src/route';

const app = express();
app.use(express.json())
app.use(reservasRoute);


  describe('/reservas', ()=>
    test('should return status 200 & content-type "application/json"',async ()=>{
        const response = await request(app)
        .get('/reservas')
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    }))

    describe(' get /reservas/:userid', ()=>
    test('should return status 200 & content-type "application/json"',async ()=>{
        const response = await request(app)
        .get('/reservas/4')
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    }))

      
    describe("POST /reservas/userid", () => {
      describe("when passed all info", () => {
    
          test('should respond with a 201 & content-type "application/json', async () => {
              const response = await request(app)
                  .post('/reservas/3')
                  .send({
                      
                        experienciaId:"4"
                  }).set('Authorization', `Bearer eyJhbGciOiJIUzI1NiJ9.c2FuQG1haWwuY29t.2DZNZcVD-R3oJPACqFLNClrXv9r_cT6-6lUjsl_gGAE`);
                  
    
              expect(response.status).toEqual(201);
              expect(response.headers['content-type']).toContain('application/json');
          })
    
    
          // should save the username and password in the database
          // should respond with a json object that contains the id from the database. (probably jwt in the real world)
      })
    
      describe("when some info is missing", () => {
    
          test("should return a 400 status code to show there was a user error.", async () => {
              const response = await request(app)
                  .post('/reservas/4')
                  .send({ });
    
              expect(response.status).toEqual(400);
          })
          // should return a json object that contains an error message.
          // should specify json as the content type in the http header.
      })
    
    })