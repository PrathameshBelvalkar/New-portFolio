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
                    <p className='text-muted'>Passionate Full Stack Developer with around 2 years of hands-on experience in building userfocused web applications and services. With strong proficiency in backend frameworks like
                        CodeIgniter and Laravel 10, I specialize in developing robust, scalable, and dynamic solutions.
                        Skilled in both frontend and backend technologies.</p>
                </div>
            </motion.div>
        </section>
    )
}
