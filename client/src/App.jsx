import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Footer from './components/Footer'
import Testimonials from './components/Testinomials'

function App() {


  return (
   <>
   
   <Nav/>
   <Hero/>
  <section id='service'> <Services/></section>

  <section id='process'>



  <HowWeWork/>
  </section>
  <section id='testinomial'>
    <Testimonials/>
  </section>
  <Footer/>
   </>
  )
}

export default App
