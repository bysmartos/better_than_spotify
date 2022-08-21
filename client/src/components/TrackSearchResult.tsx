import React from "react";

export default function TrackSearchResult({ track, chooseTrack }: any) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
        padding: "0.3rem",
        backgroundColor: "rgba(240, 240, 240, 0.4)",
        borderRadius: "50px",
        fontFamily: "Monospace",
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
        <div style={{ color: "#1e1e1e", fontWeight: "bold", fontSize: "1rem"}}>{track.title}</div>
        <div style={{ color: "#505050", fontSize: "0.9rem" }}>{track.artist}</div>
      </div>
    </div>
  );
}
