import React from "react";
import { IonGrid, IonRow } from "@ionic/react";
import './Login.css';

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=a8a1a4312c3b48d09635eddbb5069353&response_type=code&redirect_uri=http://localhost:8100&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <IonGrid>
      <IonRow class="ion-justify-content-center">
        <button className="login-button">
          <a href={AUTH_URL}>
            Login
          </a>
        </button>
      </IonRow>
    </IonGrid>
  );
}
// onClick={() => AUTH_URL }
//<a href={AUTH_URL}>Login</a>
