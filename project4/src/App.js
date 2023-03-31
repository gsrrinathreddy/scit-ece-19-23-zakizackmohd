

import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import Aboutus from './pages/Aboutus';
import Experience from './pages/Experience';
import Qualifications from './pages/Qualifications';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus"element={<Aboutus/>}/>
        <Route path="Skills"element={<Skills/>}/>
        <Route path="Experience"element={<Experience/>}/>
        <Route path="Qualifications"element={<Qualifications/>}/>
        </Routes>
        </BrowserRouter>


      
    </div>
  );
}

export default App;
