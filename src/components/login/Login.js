import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
    const googlelogin =async(credentialResponse)=>{
        try{
            const response = await fetch("http://localhost:5000/login", {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                  token: credentialResponse.credential,
                }),
              });
        }
        catch(error){
            console.log(error)
        }
    }
  return (

    <GoogleLogin
    onSuccess = {credentialResponse => {
        googlelogin(credentialResponse)
        // if (credentialResponse.credential != null) {
        //  const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
        //  console.log(USER_CREDENTIAL);
        // }
        
       }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}

export default Login