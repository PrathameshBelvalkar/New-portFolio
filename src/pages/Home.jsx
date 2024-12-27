import React from 'react'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Education from '../components/Education'
import PersonalLinks from '../components/PersonalLinks'
import PersonalLinkDown from '../components/PersonalLinkDown'
import InternShip from '../components/InternShip'
import WorkExperience from '../components/WorkExperience'
import ContactUs from '../components/ContactUs'
export default function Home() {
    return (
        <>
            <Hero />
            <Aboutus />
            <Education />
            <PersonalLinks />
            <PersonalLinkDown />
            <InternShip />
            <WorkExperience />
            <ContactUs />
        </>
    )
}
