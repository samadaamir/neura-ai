import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Solutions from './components/Solutions'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trust />
      <Solutions />
      <Testimonials/>
    </div>
  )
}

export default App