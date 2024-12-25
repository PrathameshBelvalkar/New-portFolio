import React from 'react'
import "./assets/css/global.css"
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Education from './components/Education'
export default function App() {
  return (
    <main className='portfolio-main'>
      <Hero />
      <Aboutus />
      <Education />
    </main>
  )
}
