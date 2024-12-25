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
                    <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis ipsam necessitatibus possimus magnam inventore sequi accusantium nam iste eum? Aspernatur nulla nihil quas quis id accusamus voluptates culpa ratione ab, voluptatem cumque molestiae nobis voluptatum. Dolor tempore reiciendis vero atque! Molestias nisi laboriosam fugit quas assumenda! Nihil, dolor cumque?</p>
                </div>
            </motion.div>
        </section>
    )
}
