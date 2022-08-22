import React from "react";
import useAuth from "./useAuth";
import { IonSearchbar } from "@ionic/react";
import Player from "./Player"
import SpotifyWebApi from "spotify-web-api-node";
import { useState, useEffect } from "react";
//import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
  clientId: "a8a1a4312c3b48d09635eddbb5069353",
});

export default function Dashboard({ code }: any) {
  const accesToken = useAuth(code);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults]: any = useState([]);
  const [playingTrack, setPlayingTrack]: any = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track: any) {
    setPlayingTrack(track)
    setSearchText("")
    setLyrics("")
  }

  useEffect(() => {
    if (!playingTrack) return

    axios
      .get("http://localhost:3000/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack?.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  console.log(searchResults);

  useEffect(() => {
    if (!accesToken) return;
    spotifyApi.setAccessToken(accesToken);
  }, [accesToken]);

  useEffect(() => {
    if (!searchText) return setSearchResults([]);
    if (!accesToken) return;

    let cancel = false;
    spotifyApi.searchTracks(searchText).then((res) => {
      if (cancel) return;
      console.log(res.body.tracks?.items);
      setSearchResults(
        res.body.tracks?.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              const img: any = image.height;
              const smll: any = smallest.height;
              if (img < smll) return image;
              return smallest;
            },
            track.album.images[0]
          );
          console.log(smallestAlbumImage.url);
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [searchText, accesToken]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <IonSearchbar
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        placeholder="Search music"
        style={{
          width: "50%",
          minWidth: "19rem",
          left: "50%",
          transform: "translate(-50%)",
          marginTop: "1.5rem",
          color: "#AFFB0D",
          fontFamily: "Monospace",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {searchResults.map((track: any) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
         {searchResults.length === 0 && (
          <div  style={{ 
          marginTop: "1rem",
          marginLeft: "1rem",
          marginRight: "1rem",
          padding: "1.5rem",
          backgroundColor: "rgba(240, 240, 240, 0.3)",
          borderRadius: "20px",
          fontFamily: "Solid Mono",
          textAlign: "center",
          fontSize: "0.8rem",
          fontWeight: "bold"}}>
            {lyrics}
          </div>
        )}
      </div>
      <div>  <Player accessToken={accesToken} trackUri={playingTrack?.uri} /></div>
    </div>
  );
}