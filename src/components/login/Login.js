import React, { useEffect, useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

function Login() {
  const [cookies, setCookie] = useCookies(['tokens']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    if (cookies.tokens) {
      setIsAuthenticated(true);
    }
  }, [cookies]);

  const googleLogin = async (credentialResponse) => {
    try {
      console.log(credentialResponse)
      const response = await fetch("http://localhost:5000/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          token: credentialResponse.credential,
        }),
      });
      const t = await response.json();
      setCookie('tokens', t.authToken, { path: '/' });
      if (t.authToken) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        googleLogin(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}

export default Login;
