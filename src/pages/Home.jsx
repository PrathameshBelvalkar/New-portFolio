import React from 'react'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Education from '../components/Education'
import InternShip from '../components/InternShip'
import WorkExperience from '../components/WorkExperience'
import ContactUs from '../components/ContactUs'
import Certificates from '../components/Certificates'
export default function Home() {
    return (
        <>
            <Hero />
            <Aboutus />
            <Education />
            <InternShip />
            <WorkExperience />
            <Certificates />
            <ContactUs />
        </>
    )
}
