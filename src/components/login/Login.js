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
      console.log(credentialResponse);
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
      const expires = new Date(Date.now() + 6 * 60 * 60 * 1000); 
      setCookie('tokens', t.authToken, { path: '/', expires });
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <GoogleLogin
        onSuccess={credentialResponse => {
          googleLogin(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      />
    </div>
  );
}

export default Login;
