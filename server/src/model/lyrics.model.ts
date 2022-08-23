import lyricsFinder from "lyrics-finder";

class Lyrics {
  async getLyrics(req: any, res: any) {
    const lyrics =
      (await lyricsFinder(req.query.artist, req.query.track)) ||
      "No Lyrics Found";
    res.json({ lyrics });
    console.log(res.json);
    return res.json;
  }
}

export default new Lyrics();
