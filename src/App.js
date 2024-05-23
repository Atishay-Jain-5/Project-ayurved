import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3(text area)/Section3";
import SymptomsState from "./context/SymptopmsState";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <GoogleOAuthProvider clientId="123937925398-ttr09bpba16rkhuiun1ol7ckc00duf3t.apps.googleusercontent.com">
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <SymptomsState>
          <Router>
            <div className="overflow-hidden">
              <Navbar />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <div className="h-screen">
                        <HomePage />
                      </div>
                      <div className="h-screen">
                        <Section2 />
                      </div>
                      <div>
                        <Section3 />
                      </div>
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </Router>
        </SymptomsState>
      </CookiesProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
