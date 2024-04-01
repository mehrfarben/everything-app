import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Quiz from "./pages/Quiz"
import Photos from "./pages/Photos"
import IdeaGenerator from "./pages/IdeaGenerator"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main-body'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='quiz' element={<Quiz />} />
          <Route path='photos' element={<Photos />} />
          <Route path='ideagenerator' element={<IdeaGenerator />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
