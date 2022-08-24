import React from 'react';
import { IonGrid, IonRow } from "@ionic/react";
import './Login.css'


const AUTH_URL= `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
//const URL = "http://localhost:3000/login"

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
