import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero_image.png";

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-container mt-5">
                <div className="align-items-center d-flex gap-1 hero-content ">
                    <motion.div
                        className="hero-text"
                        initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="hero-title">
                            <span className="title-text display-4">Hi, I'm <br /><span className="">Prathamesh</span><span className="wavy-hand">👋</span></span>
                        </div>
                        <div className="hero-description mt-1">
                            <span className="description-text text-muted">
                                Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <span className="image-container">
                            <img className="profile-image undraggable" alt="My Image" src={HeroImage} />
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
