import Router from 'express';
import {Request,Response} from 'express';
import refreshTokenController from '../controller/refreshToken.controller';
import dotenv from 'dotenv'

dotenv.config()


const router = Router();

router.post('/refresh', refreshTokenController.postLogin);


export default router;
