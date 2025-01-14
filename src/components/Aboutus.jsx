import React from 'react'
import { motion } from "framer-motion";
export default function Aboutus() {
    return (
        <section id="aboutUs">
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className='headline-text'>About</h2>
                <div className="about-content">
                    <p className='text-muted'>
                        Passionate Full Stack Developer with around 2 years of hands-on experience in building user-focused web applications and services. A proactive team leader and problem solver, skilled in driving projects forward and ensuring successful outcomes. Focused on delivering exceptional user experiences while fostering collaboration and continuous innovation in development.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
