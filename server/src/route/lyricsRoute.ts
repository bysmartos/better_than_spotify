
import Router from 'express';
import LyricsController from '../controller/lyrics.controller';


const router = Router();

router.get("/lyrics", LyricsController.getLyrics )

  export default router;