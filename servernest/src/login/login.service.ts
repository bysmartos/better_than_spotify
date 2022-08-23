import { Injectable } from '@nestjs/common';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class LoginService {
  async postLogin(code: any): Promise<any> {
    const spotifyApi = new SpotifyWebApi({

      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
main
    });

    return spotifyApi.authorizationCodeGrant(code);
  }
}
