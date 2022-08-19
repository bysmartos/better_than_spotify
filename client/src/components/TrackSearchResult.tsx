import React from "react"

export default function TrackSearchResult({ track, chooseTrack }:any) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <div
      
      style={{ cursor: "pointer", display:"flex", alignItems: "center" }}
      onClick={handlePlay}
    >
      <img alt="img" src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div >{track.artist}</div>
      </div>
    </div>
  )
}