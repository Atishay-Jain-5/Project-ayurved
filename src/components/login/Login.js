import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useCookies } from 'react-cookie';

function Login() {
  const [token,set_token ]= useState("")
  const [cookies, setCookie] = useCookies(['tokens']);
    const googlelogin =async(credentialResponse)=>{
      console.log(credentialResponse)
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
              const t=await response.json();
              console.log(t.authToken)
              setCookie('tokens',t.authToken)
              
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