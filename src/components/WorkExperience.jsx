import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import StreamDeck from "../assets/images/project/StreamDeck.png";
import CarbonExchnage from "../assets/images/project/CarbonExchange.png";
import QrImage from "../assets/images/project/QR.png";
import DiverseImage from "../assets/images/project/DiverseServices.png";
import Bluemoose from "../assets/images/project/BlueMoose.png";
import TeamLeader from '../assets/images/icons/TeamLeader';
import Fancybox from './lib/Fancybox';

const workExperiences = [
    {
        role: "SDE-I Developer",
        company: "Ramee Systems",
        duration: "Feb 2025 - Present",
        description: "Building robust and scalable web applications with a focus on performance, security, and user experience. Implementing modern frontend architectures, optimizing database queries, and ensuring seamless API integrations. Collaborating with designers and backend teams to create intuitive, high-quality digital products that meet business and user needs.",
        skills: ["React Js", "JavaScript", "PHP", "MySQL", "Laravel 10", "CodeIgniter 4", "Express Js", "Tailwind CSS", "Git", "GitHub", "Gitlab"],
        link: "https://rameesystems.com"
    },
    {
        role: "Full Stack Developer",
        company: "Noitavonne",
        duration: "Aug 2023 - Dec 2024",
        description: "Designed and developed scalable web applications, focusing on optimizing user experience and system efficiency. Built reusable components, streamlined API integrations, and implemented best practices for code maintainability. Worked closely with cross-functional teams to deliver high-quality software solutions that aligned with business goals.",
        skills: ["React Js", "JavaScript", "PHP", "MySQL", "Laravel 10", "CodeIgniter 3", "Express Js", "HTML5 and CSS3", "Bootstrap 5", "Tailwind CSS", "Git", "GitHub"],
        link: "https://www.noitavonne.com"
    }
];


const projects = [
    {
        title: "StreamDeck & Tv",
        description: "StreamDeck is a streaming management tool used for broadcasting and controlling live streams, integrating with TV.silocloud.io. It enables users to program and schedule content using EPG (Electronic Program Guide), providing a seamless streaming experience.",
        skills: ["Team Leader", "React Js", "Laravel 10", "MySql", "FFmpeg", "RTMP", "WebRTC", "Node Js", "Socket.io"],
        image: StreamDeck,
        link: "https://streamdeck.silocloud.io/"
    },
    {
        title: "CarbonExchange",
        description: "Alexander’s Carbon Exchange is a blockchain-based platform enabling transparent carbon credit trading, connecting producers and buyers to promote sustainable practices and combat climate change for a greener future.",
        skills: ["Html5 and CSS3", "JavaScript", "jQuery", "MySql", "MapBox API", "REGRID API"],
        image: CarbonExchnage,
        link: "https://carbonexchange.ai"
    },
    {
        title: "QR Code Generator",
        description: "The QR Code Generator allows users to create both static and dynamic QR codes for various purposes, enhancing digital interaction and accessibility. It provides an easy-to-use platform for generating QR codes that can be used for websites, and other applications.",
        skills: ["Team Leader", "React Js", "Laravel 10", "MySql"],
        image: QrImage,
        link: "https://qr.silocloud.io/"
    },
    {
        title: "DiverseServices",
        description: "Diverse Multi Services, LLC offers comprehensive services, including tax preparation, bookkeeping, printing, and notary support, serving the DFW Metroplex and all 50 states to meet diverse community needs.",
        skills: ["Team Leader", "React Js", "Laravel 10", "MySql"],
        image: DiverseImage,
        link: "https://diverseservices.com"
    },
    {
        title: "BlueMoose API",
        description: "Creating an API for bluemoose Tv that will generate subtitles of English Video and translate them using deep translate.",
        skills: ["Team Leader", "React Js", "Laravel 10", "MySql", "Flask", "Python", "Open AI"],
        image: Bluemoose,
        link: "https://centera.live/"
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
                <div className="divider mb-2">Company Projects</div>
                {projects.map((project, index) => (
                    <div key={index} className='d-flex d-flex-column-on-small justify-content-between align-items-center mb-3'>
                        <div className='project-image'>
                            <Fancybox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                <a data-fancybox="gallery" href={project.image} >
                                    <img src={project.image} alt={project.title} className='border border-warning border-2 rounded-1' loading='lazy' />
                                </a>
                            </Fancybox>
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
                                            {skill === "Team Leader" && <span className='me-1'><TeamLeader /></span>}
                                            {skill}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                ))}
                <hr />
            </motion.div>
        </section>
    );
}
