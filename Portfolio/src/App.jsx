import React from 'react'
import './App.css'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Projects from '../pages/projects'

import Header from '../components/header'
import Footer from '../components/footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F] bg-noise-pattern text-slate-200">
      <Header />

      <Home />

      <Footer />
    </div>
  )
}

export default App
