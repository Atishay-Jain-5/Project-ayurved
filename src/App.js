import "./App.css";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3(text area)/Section3";
import SymptomsState from "./context/SymptopmsState";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';
function App() {
  return (
<GoogleOAuthProvider clientId="123937925398-ttr09bpba16rkhuiun1ol7ckc00duf3t.apps.googleusercontent.com">
<CookiesProvider defaultSetOptions={{ path: '/' }}>
    <SymptomsState>

      <div className="overflow-hidden">
        <Navbar></Navbar>
        <Login></Login>
        <div className="h-screen">
          <HomePage></HomePage>
        </div>
        <div className="h-screen">
          <Section2></Section2>
        </div>
        <div >
          {/* <Section2></Section2> */}
          <Section3></Section3>
        </div>
      </div>
    </SymptomsState>
    </CookiesProvider>
  </GoogleOAuthProvider>
  );
}

export default App;
