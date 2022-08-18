import React from 'react'

const AUTH_URL= "https://accounts.spotify.com/authorize?client_id=a8a1a4312c3b48d09635eddbb5069353&response_type=code&redirect_uri=http://localhost:8100&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
//const URL = "http://localhost:3000/login"
export default function Login() {
    
  return (
    <a href={AUTH_URL}>Login</a>
  )
}
// onClick={() => AUTH_URL }
//<a href={AUTH_URL}>Login</a>