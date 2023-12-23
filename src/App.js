import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import ContactForm from './components/ContactForm'
import Home from './components/Home';
import Footer from './components/Footer';
import Success from './components/Success';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/success" element={<Success />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
