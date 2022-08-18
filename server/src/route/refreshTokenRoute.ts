import Router from 'express';
import {Request,Response} from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv'

dotenv.config()


const router = Router();

router.post('/refresh', (req:Request,res:Response)=>{
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
});


export default router;
