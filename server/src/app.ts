import express, {Request,Response} from 'express';
import cors from "cors";
import {loginRoute} from './route';
import bodyParser from 'body-parser'



const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json())


app.use(loginRoute);





app.get('/',(req:Request,res:Response)=>{
    res.json('hello world');
})




export default app;
