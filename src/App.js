import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import ContactForm from './components/ContactForm'
import Home from './components/Home';
import Footer from './components/Footer';
import Success from './components/Success';
import GstTaxServices from './components/GstTaxServices';
import Insurance from './components/Insurance';
import Loan from './components/Loan';
import Register from './components/Register';
import Login from './components/Login';
import { AuthContext } from './contexts/AuthContext';
import Private from './components/Private';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("gst-user")));
  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/contact" element={<Private Component={ContactForm} />} />
            <Route path="/success" element={<Success />} />
            <Route path="/gstTaxServices" element={<Private Component={GstTaxServices} />} />
            <Route path="/insurance" element={<Private Component={Insurance} />} />
            <Route path="/loan" element={<Private Component={Loan} />} />

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}

export default App
