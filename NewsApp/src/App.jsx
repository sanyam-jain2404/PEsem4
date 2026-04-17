import { useState } from 'react'
import{BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css'

import Footer from './components/Footer'
import Details from './components/Details'
import NewsDetail from './components/NewsDetail'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
          
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
