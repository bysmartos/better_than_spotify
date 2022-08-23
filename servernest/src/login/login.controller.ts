import {Controller, Get, Post, Req, Res } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Get()
  getall() {
    return 'Hello!';
  }

  @Post()
  postLogin(@Req() req: any, @Res() res: any): Promise<any> {
    const code = req.body.code;
    this.loginService
      .postLogin(code)
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((err) => {
        res.sendStatus(400);
      });
    console.log(res.json);
    return res.json;
  }
}
