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
    <div>
      <Header />

      <Home />

      <Footer />
    </div>
  )
}

export default App
