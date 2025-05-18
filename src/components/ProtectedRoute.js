import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(['tokens']);
  

  
  if (!cookies.tokens) {
    
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
