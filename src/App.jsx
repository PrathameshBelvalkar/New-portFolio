import React from 'react'
import "./assets/css/global.css"
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import ContactUs from './components/ContactUs'
import InternShip from './components/InternShip'
export default function App() {
  return (
    <main className='portfolio-main'>
      <Hero />
      <Aboutus />
      <Education />
      <InternShip />
      <WorkExperience />
      <ContactUs />
    </main>
  )
}
