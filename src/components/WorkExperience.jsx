import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import StreamDeck from "../assets/images/project/StreamDeck.png";
import CarbonExchnage from "../assets/images/project/CarbonExchange.png";
import QrImage from "../assets/images/project/QR.png";
import DiverseImage from "../assets/images/project/DiverseServices.png";
import Bluemoose from "../assets/images/project/BlueMoose.png";

const workExperiences = [
    {
        role: "Full Stack Developer",
        company: "Noitavonne",
        duration: "Aug 2023 - Dec 2024",
        description: "Expert in crafting responsive, user-centric interfaces, ensuring seamless frontend-backend integration. Conducted thorough user research, implemented pixel-perfect designs, and delivered scalable, user-friendly web applications focused on usability, efficiency, and modern standards.",
        skills: ["React Js", "JavaScript", "PHP", "MySQL", "Laravel 10", "CodeIgniter 3", "Express Js", "HTML5 and CSS3", "Bootstrap 5", "Tailwind CSS", "Git", "GitHub"],
        link: "https://www.noitavonne.com"
    }
];

const projects = [
    {
        title: "StreamDeck & Tv",
        description: "StreamDeck is a streaming management tool used for broadcasting and controlling live streams, integrating with TV.silocloud.io. It enables users to program and schedule content using EPG (Electronic Program Guide), providing a seamless streaming experience.",
        skills: ["React Js", "Laravel 10", "MySql", "FFmpeg", "RTMP", "WebRTC", "Node Js", "Socket.io"],
        image: StreamDeck,
        link: "https://streamdeck.silocloud.io/"
    },
    {
        title: "CarbonExchange",
        description: "Alexander’s Carbon Exchange is a blockchain-based platform enabling transparent carbon credit trading, connecting producers and buyers to promote sustainable practices and combat climate change for a greener future.",
        skills: ["Html5 and CSS3", "JavaScript", "MySql", "MapBox API", "REGRID API"],
        image: CarbonExchnage,
        link: "https://carbonexchange.ai"
    },
    {
        title: "QR Code Generator",
        description: "The QR Code Generator allows users to create both static and dynamic QR codes for various purposes, enhancing digital interaction and accessibility. It provides an easy-to-use platform for generating QR codes that can be used for websites, and other applications.",
        skills: ["React Js", "Laravel 10", "MySql"],
        image: QrImage,
        link: "https://qr-code-generator.com"
    },
    {
        title: "DiverseServices",
        description: "Diverse Multi Services, LLC offers comprehensive services, including tax preparation, bookkeeping, printing, and notary support, serving the DFW Metroplex and all 50 states to meet diverse community needs.",
        skills: ["React Js", "Laravel 10", "MySql"],
        image: DiverseImage,
        link: "https://diverseservices.com"
    },
    {
        title: "BlueMoose API",
        description: "Creating an API for bluemoose Tv that will generate subtitles of English Video and translate them using deep translate.",
        skills: ["React Js", "Laravel 10", "MySql", "Flask", "Python", "Open AI"],
        image: Bluemoose,
        link: "https://elastic-sutherland.174-143-48-203.plesk.page/"
    }
];

// Function to handle redirection
const handleRedirect = (url) => {
    window.open(url, "_blank");
};

export default function WorkExperience() {
    return (
        <section id='work-experience'>
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <h2 className='headline-text'>Work Experience</h2>
                {workExperiences.map((experience, index) => (
                    <div key={index} className="experience-card d-flex justify-content-between mb-3">
                        <div className='experience-year-div'>
                            <span className='text-muted experience-year'>{experience.duration}</span>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className='d-flex flex-column experience-content'>
                                <span className='fw-bolder'>{experience.role}</span>
                                <small
                                    onClick={() => handleRedirect(experience.link)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {experience.company}
                                    <ArrowUpRight size={16} />
                                </small>
                                <span className='text-muted experience-year-small'>{experience.duration}</span>
                                <p>{experience.description}</p>
                                <ul className='d-flex list-unstyled flex-wrap'>
                                    {experience.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className='skill-tag bg-body-secondary'>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="divider mb-2">Projects</div>
                {projects.map((project, index) => (
                    <div key={index} className='d-flex d-flex-column-on-small justify-content-between align-items-center mb-3'>
                        <div className='project-image'>
                            <img src={project.image} alt={project.title} className='border border-warning border-2 rounded-1' loading='lazy' />
                        </div>
                        <div>
                            <div className='d-flex flex-column project-content'>
                                <span className='fw-bolder'>{project.title}</span>
                                <small
                                    onClick={() => handleRedirect(project.link)}
                                    style={{ cursor: "pointer" }}
                                >
                                    Visit Here
                                    <ArrowUpRight size={16} />
                                </small>
                                <p>{project.description}</p>
                                <ul className='d-flex list-unstyled flex-wrap'>
                                    {project.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className='skill-tag bg-body-secondary'>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
