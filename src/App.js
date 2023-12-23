import React from 'react'
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
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/success" element={<Success />} />
          <Route path="/gstTaxServices" element={<GstTaxServices />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/loan" element={<Loan />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
