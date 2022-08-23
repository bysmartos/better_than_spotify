import React from "react";

export default function TrackSearchResult({ track, chooseTrack }: any) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      style={{
        width: "50%",
        minWidth: "17.5rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginTop: "0.6rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0.3rem",
        backgroundColor: "rgba(221, 243, 255, 0.4)",
        borderRadius: "50px",
        fontFamily: "Monospace",  
        boxShadow: "0px 0px 4px #2a213f",
      }}
      onClick={handlePlay}
    >
      <img
        alt="img"
        src={track.albumUrl}
        style={{
          height: "64px",
          width: "64px",
          borderRadius: "50px",
          marginRight: "0.5rem",
        }}
      />
      <div className="ml-3">
        <div style={{ color: "#291e63", fontWeight: "bold", fontSize: "1rem"}}>{track.title}</div>
        <div style={{ color: "#4b39ac", fontSize: "0.8rem" }}>{track.artist}</div>
      </div>
    </div>
  );
}
