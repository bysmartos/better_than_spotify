
import express from 'express';
import request from 'supertest';
import {experienciasRoute} from '../../src/route';

const app = express();
app.use(express.json())
app.use(experienciasRoute);


  describe('/experiencias', ()=>
    test('should return status 200 & content-type "application/json"',async ()=>{
        const response = await request(app)
        .get('/experiencias')
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    }))

    describe(' get /experiencias/:id', ()=>
    test('should return status 201 & content-type "application/json"',async ()=>{
        const response = await request(app)
        .get('/experiencias/4')
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toContain('application/json')
    }))

    
describe("POST /experiencias/insert", () => {
  describe("when passed all info", () => {

      test('should respond with a 201 & content-type "application/json', async () => {
          const response = await request(app)
              .post('/experiencias/insert')
              .send({
                  
                    titulo:"Paseo en bicicleta por el Montseny",
                    imagen:"https://i.imgur.com/5bf63Vg.jpg",
                    descripcion:"test",
                    precio:"250",
                    duracionhoras: "6h",
                    accesibilidad:"Actividad disponible para todas las edades. Disponemos de bicicletas accesibles para personas con movilidad reducida en el tren inferior así como sillines con capacidad para niños menores de 5 años (peso máximo 20kg).",
                    ubicacion:"montaña",
                    transporte:"bicicleta",
                    duracion:"excursión larga"
              });

          expect(response.status).toEqual(201);
          expect(response.headers['content-type']).toContain('application/json');
      })


      // should save the username and password in the database
      // should respond with a json object that contains the id from the database. (probably jwt in the real world)
  })

  describe("when some info is missing", () => {

      test("should return a 400 status code to show there was a user error.", async () => {
          const response = await request(app)
              .post('/experiencias/insert')
              .send({ titulo: "1234" });

          expect(response.status).toEqual(400);
      })
      // should return a json object that contains an error message.
      // should specify json as the content type in the http header.
  })

})

describe("PUT  /experiencias/:id", () => {
    describe("when passed all info", () => {
  
        test('should respond with a 201 & content-type "application/json', async () => {
            const response = await request(app)

                .put('/experiencias/20')
                .send({
                    
                      titulo:"Paseo en bicicleta por el Montseny",
                      imagen:"https://i.imgur.com/5bf63Vg.jpg",
                      descripcion:"test",
                      precio:"250",
                      duracionhoras: "6h",
                      accesibilidad:"Actividad disponible para todas las edades. Disponemos de bicicletas accesibles para personas con movilidad reducida en el tren inferior así como sillines con capacidad para niños menores de 5 años (peso máximo 20kg).",
                      ubicacion:"montaña",
                      transporte:"bicicleta",
                      duracion:"excursión larga"
                })
  
            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        })
  
  
    })
  
    describe("when some info is missing", () => {
  
        test("should return a 400 status code to show there was a user error.", async () => {
            const response = await request(app)
                .put('/experiencias/10')
                .send({ titulo: "1234" });
  
            expect(response.status).toEqual(400);
        })
       
    })
  
  })


  describe("DELETE  /experiencias/:id", () => {
    describe("when passed all info", () => {
  
        test('should respond with a 201 & content-type "application/json', async () => {
            const response = await request(app)

                .delete('/experiencias/106')
            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        })
  

    })
  
    describe("when something is wrong", () => {
  
        test("should return a 400 status code to show there was a user error.", async () => {
            const response = await request(app)
                .delete('/experiencias/id')
                
  
            expect(response.status).toEqual(400);
        })
     
    })
  
  })



  



