import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import './App.css'
import OurMenu from "./components/OurMenu";
import Login from "./components/Login";
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/ourmenu" element={<OurMenu />} />
          <Route path="/login" element={<Login />} />          
          <Route path="/hero" element={<HeroSection />} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
