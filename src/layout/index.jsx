import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "../assets/css/global.css"
import 'react-toastify/dist/ReactToastify.css'
import ThemeSwitch from '../components/ThemeSwitch'
import PersonalLinks from '../components/PersonalLinks'
import PersonalLinkDown from '../components/PersonalLinkDown'
import { Analytics } from "@vercel/analytics/react"
export default function Layout() {
    return (
        <main className='portfolio-main'>
            <ToastContainer hideProgressBar pauseOnHover={false} autoClose={3000} closeButton={false} />
            <Outlet />
            <ThemeSwitch />
            <PersonalLinks />
            <Analytics />
            <PersonalLinkDown />
        </main>
    )
}
