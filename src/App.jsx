import React from 'react'
import "./assets/css/global.css"
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import ContactUs from './components/ContactUs'
import InternShip from './components/InternShip'
import PersonalLinks from './components/PersonalLinks'
import PersonalLinkDown from './components/PersonalLinkDown'
import ThemeSwitch from './components/ThemeSwitch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <main className='portfolio-main'>
      <ToastContainer hideProgressBar pauseOnHover={false} autoClose={3000} closeButton={false} />
      <Hero />
      <Aboutus />
      <Education />
      <PersonalLinks />
      <PersonalLinkDown />
      <InternShip />
      <WorkExperience />
      <ContactUs />
      <ThemeSwitch />
    </main>
  )
}
