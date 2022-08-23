import { Request, Response } from "express";
import loginModel from "../model/login.model";
import dotenv from "dotenv";
dotenv.config();

const LoginController = {
  postLogin: async (req: Request, res: Response) => {
    const code = await req.body.code;
    loginModel
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
  },
};


export default LoginController