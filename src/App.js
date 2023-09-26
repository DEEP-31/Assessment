import React from 'react';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import OurProducts from './components/OurProducts';
import Login from './components/Login';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
setTimeout(()=>{
   alert("Welcome  !  click home to visit the website");
}, 3000)
  return (
    <>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
           <Route exact path='/home' element={<Home/>} />
           <Route exact path='/about' element={<About/>}/>
           <Route exact path='/contactus' element={<ContactUs/>}/>
           <Route exact path='/ourproducts' element={<OurProducts/>}/>  
           <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

