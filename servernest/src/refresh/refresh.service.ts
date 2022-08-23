import { Injectable, Post } from '@nestjs/common';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class RefreshService {
  async postRefresh(refreshToken: any): Promise<any> {
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:8100',
      clientId: 'a8a1a4312c3b48d09635eddbb5069353',
      clientSecret: '374c2af0042c4d1295e4b2ce17b399e3',
      refreshToken,
    });

    return spotifyApi.refreshAccessToken();
  }
}
