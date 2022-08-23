import blobani from "../assets/images/blobanimation2.svg";

export default function Blob() {
  return (
    <div>
    <img
      src={blobani}
      style={{
        width: "40%",
        minWidth: "410px",
        zIndex: "0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
      alt=""
    />
    </div>
  );
}
