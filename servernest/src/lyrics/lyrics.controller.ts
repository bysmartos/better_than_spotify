import { Controller, Get, Req, Res } from '@nestjs/common';
import { LyricsService } from './lyrics.service';

@Controller('lyrics')
export class LyricsController {
  constructor(private readonly lyricsService: LyricsService) {}
  @Get()
  async getLyrics(@Req() req: any, @Res() res: any) {
    return this.lyricsService.getLyrics(req, res);
  }
}
