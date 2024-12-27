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
                        Passionate Full Stack Developer with around 2 years of hands-on experience in building user-focused web applications and services. Proficient in modern frontend technologies like <u className='about-dark'>React.js</u>, creating dynamic and responsive user interfaces. Strong expertise in backend frameworks such as <u className='about-dark'>CodeIgniter</u> and <u className='about-dark'>Laravel 10</u>, enabling the development of robust, scalable, and secure solutions. Skilled in designing and implementing <u className='about-dark'>full-stack architectures</u> that integrate seamlessly, delivering exceptional user experiences. Dedicated to continuous learning and innovation, ensuring the delivery of high-quality, performance-driven applications.
                    </p>

                </div>
            </motion.div>
        </section>
    )
}
