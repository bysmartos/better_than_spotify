import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { RefreshController } from './refresh/refresh.controller';
import { LyricsController } from './lyrics/lyrics.controller';
import { LoginService } from './login/login.service';
import { LyricsService } from './lyrics/lyrics.service';
import { RefreshService } from './refresh/refresh.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    LoginController,
    RefreshController,
    LyricsController,
  ],
  providers: [AppService, LoginService, LyricsService, RefreshService],
})
export class AppModule {}
