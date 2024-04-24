
import './App.css';
import HomePage from './components/homePage/HomePage';
import Navbar from './components/navbar/Navbar';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3(text area)/Section3';
import SymptomsState from './context/SymptopmsState';

function App() {
  return (
    <SymptomsState>

   <div className='overflow-hidden'>
 
   <Navbar></Navbar>
   <div className='h-screen'>
   <HomePage></HomePage> 

   </div>
   <div className='h-screen'>
   <Section2></Section2>

   </div>
   <div className='h-screen'>
   {/* <Section2></Section2> */}
<Section3></Section3>
   </div>
   </div>
    </SymptomsState>
  );
}

export default App;
