
import Router from 'express';
import {Request,Response} from 'express';
import lyricsFinder from "lyrics-finder"


const router = Router();

router.get("/lyrics", async (req:Request,res:Response) => {
    const lyrics =
      (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
    res.json({ lyrics })
  })

  export default router;