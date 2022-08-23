import { Injectable, Post } from '@nestjs/common';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class RefreshService {
  async postRefresh(refreshToken: any): Promise<any> {
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    });

    return spotifyApi.refreshAccessToken();
  }
}
