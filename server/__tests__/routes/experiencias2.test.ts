

import express from 'express';
import request from 'supertest';
import {experienciasRoute} from '../../src/route';

const app = express();
app.use(express.json())
app.use(experienciasRoute);


  describe("POST /experiencia/filter", () => {
    describe("when passed all info", () => {
  
        test('should respond with a 201 & content-type "application/json', async () => {
            const response = await request(app)
                .post('/experiencia/filter')
                .send({
                    
                      searcher:"paseo"
                });
  
            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        })
  
    })
  
  })