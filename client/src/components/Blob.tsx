import { IonImg } from "@ionic/react"
import blobani from "../assets/images/blobanimation.svg"

export default function Blob() {
    return (
<IonImg src={blobani} style={{width: "35%", minWidth: "390px", zIndex: "-1", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} />
    )
}