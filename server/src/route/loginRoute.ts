import Router from 'express';
import {Request,Response} from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv'

dotenv.config()


const router = Router();

router.post('/login', (req:Request,res:Response)=>{
	const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })

    console.log(res.json)
});


export default router;
