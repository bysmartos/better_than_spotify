import { Get, Injectable } from '@nestjs/common';
import lyricsFinder from 'lyrics-finder';

@Injectable()
export class LyricsService {
  @Get()
  async getLyrics(req: any, res: any) {
    const lyrics =
      (await lyricsFinder(req.query.artist, req.query.track)) ||
      'No Lyrics Found';
    res.json({ lyrics });
    console.log(res.json);
    return res.json;
  }
}
