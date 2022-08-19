import React from 'react'
import useAuth from './useAuth'
import { IonPage, IonSearchbar } from '@ionic/react'
import { useState, useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({
  clientId: "68edede7a5a144f9b314e1a79cfcfae9",
})

export default function Dashboard({code}: any) {
    const accessToken= useAuth(code);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState ([]);
    console.log(searchResults)

    useEffect(() => {
      if (!accessToken) return spotifyApi.setAccessToken(accessToken)}, [accessToken])

  return (
    <IonPage>
    <IonSearchbar
    value={search}
    onIonChange={(e) => setSearch(e.detail.value!)}
    placeholder="Search music"
    style={{
      width: "50%",
      minWidth: "30rem",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
      marginTop: "1.5rem",
      color: "#AFFB0D",
      fontFamily: "Solid Mono",
    }}
  >
  </IonSearchbar>
    {/* <div>{code}</div> */}
    <h1>Songs</h1>
    </IonPage>
  )
}