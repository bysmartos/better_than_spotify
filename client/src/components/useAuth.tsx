import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth(code: any): any {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
    .post("https://clon-spotify.herokuapp.com/login", {
       code,
      })
      .then((res) => {
        console.log(res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({} ,'', "/");
      })
          .catch(() => {
            //window.location.href = "/";
          });
      }, [code]);

      useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(() => {
          axios
          .post("https://clon-spotify.herokuapp.com/refresh", {
              refreshToken,
            })
            .then((res) => {
              setAccessToken(res.data.accessToken);
              setExpiresIn(res.data.expiresIn);
            })
            .catch(() => {
             // window.location.href = "/";
            });
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
      }, [refreshToken, expiresIn]);

    return accessToken;
  }
//   );
// }
