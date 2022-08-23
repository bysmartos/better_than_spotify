import { Request, Response } from "express";
import refreshTokenModel from "../model/refreshToken.model";
import dotenv from "dotenv";
dotenv.config();

const refreshTokenController = {
  postLogin: async (req: Request, res: Response) => {
    const refreshToken = await req.body.refreshToken;
    refreshTokenModel
      .postRefresh(refreshToken)
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
    return res.json;
  },
};

export default refreshTokenController
