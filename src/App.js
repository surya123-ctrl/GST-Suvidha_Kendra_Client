import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import ContactForm from './components/ContactForm'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
