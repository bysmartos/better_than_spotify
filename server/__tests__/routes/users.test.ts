import express from 'express';
import request,{Response} from 'supertest';
import { userRoute } from '../../src/route';


const app = express();

app.use(express.json())
app.use(userRoute);

describe('/user/all', ()=>
test('should return status 200 & content-type "application/json"',async ()=>{
    const response = await request(app)
    .get('/user/all')
    .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiJ9.c2FuQG1haWwuY29t.2DZNZcVD-R3oJPACqFLNClrXv9r_cT6-6lUjsl_gGAE`);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json')
}))


describe("POST /user/register", () => {
    describe("when passed a email,password, name, last_name, role", () => {

        test('should respond with a 200 & content-type "application/json', async () => {
            const response = await request(app)
                .post('/user/register')
                .send({
                    email: "mi@mail.com",
                    password: "1234",
                    name: "sandra",
                   last_name:  "martos",
                    role: "client"
                });

            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        })


     
    })

    describe("when some info is missing", () => {

        test("should return a 400 status code to show there was a user error.", async () => {
            const response = await request(app)
                .post('/user/register')
                .send({ password: "1234" });

            expect(response.status).toEqual(400);
        })
       
    })

})

describe("PUT  /user/:id", () => {
    describe("when passed all info", () => {
  
        test('should respond with a 201 & content-type "application/json', async () => {
            const response = await request(app)

                .put('/user/212')
                .send({
                    
                    email: "mi@mail.com",
                    password: "1234",
                    name: "sandra",
                   last_name:  "martos",
                })
  
            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        })
  
  
    
    })
  
    describe("when some info is missing", () => {
  
        test("should return a 400 status code to show there was a user error.", async () => {
            const response = await request(app)
                .put('/user/10')
                .send({email: "mi@mail.com" });
  
            expect(response.status).toEqual(400);
        })
        
    })
})


describe("POST /user/login", () => {
    describe("cuando pongo un usuario y contraseña correcto, se loguea", () => {
        test('should respond with a 200 & content-type "application/json', async () => {
            const response = await request(app)
                .post('/user/login')
                .send({
                    email: "san@mail.com",
                    password:"1234"
                })
            expect(response.status).toEqual(200);
            expect(response.headers['content-type']).toContain('application/json');
        })
    })

    describe("when some info is missing", () => {

        test("should return 400.", async () => {
            const response = await request(app)
                .post('/user/login')
                .send({ password: "1234" });
            expect(response.status).toEqual(400);
        })
       
    })
})