import './App.css';
import React, { useState } from 'react'

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light') 







  const toggleMode = ()=>{
    if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = '#343a40'
              
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
       
    }

  }




  return (
    <>
    <Router>
    <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode} />
    <Routes>
        <Route path='/' element={<TextForm mode={mode} />} />
        <Route path='/about' element={<About/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
