import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  document.body.style.backgroundColor= "black"
  return (
    <>
    <Navigationbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/ContactMe' element={<ContactMe/>}/>
      <Route path='/Education' element={<Education/>}/>
      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;

