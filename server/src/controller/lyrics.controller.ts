import { Request, Response } from "express";
import lyricsModel from "../model/lyrics.model";

const LyricsController = {
  getLyrics: async (req: Request, res: Response) => {
    return lyricsModel.getLyrics(req, res);
  },
};


export default LyricsController