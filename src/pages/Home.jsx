import React from 'react'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Education from '../components/Education'
import InternShip from '../components/InternShip'
import WorkExperience from '../components/WorkExperience'
import ContactUs from '../components/ContactUs'
import Certificates from '../components/Certificates'
import { Helmet } from 'react-helmet'
export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home - Prathamesh Belvalkar</title>
                <meta name="description" content="Welcome to the portfolio of Prathamesh Belvalkar, a Full Stack Developer specializing in React JS, Laravel, and CodeIgniter." />
                <meta name="keywords" content="Full Stack Developer, React JS, Laravel, CodeIgniter, Portfolio" />
                <meta property="og:title" content="Home - Prathamesh Belvalkar" />
                <meta property="og:description" content="Explore the portfolio of Prathamesh Belvalkar, showcasing expertise in web development and scalable solutions." />
                <meta property="og:image" content="/meta_image.jpg" />
                <meta property="og:url" content="https://prathameshportfolio.vercel.app/" />
            </Helmet>
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
