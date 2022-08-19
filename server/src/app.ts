import express, {Request,Response} from 'express';
import cors from "cors";
import {loginRoute, refreskTokenRoute, lyricsRoute} from './route';





const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(loginRoute);
app.use(refreskTokenRoute);
app.use(lyricsRoute);





app.get('/',(req:Request,res:Response)=>{
    res.json('hello world');
})




export default app;
