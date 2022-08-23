import Router from 'express';
import {Request,Response} from 'express';
import LoginController from '../controller/login.controller';
import dotenv from 'dotenv'

dotenv.config()


const router = Router();

router.post('/login', LoginController.postLogin);


export default router;
