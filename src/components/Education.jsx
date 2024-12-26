import React from 'react'
import { motion } from "framer-motion";
import KitImer from "../assets/images/kitImer.jpg";
import NewCollege from "../assets/images/new_college.jpg";
import School from "../assets/images/school.png";

const educationData = [
    {
        id: 1,
        image: KitImer,
        school: "Kolhapur Institute of Technology",
        degree: "Master's of Computer Application",
        year: "2021 - 2023",
    },
    {
        id: 2,
        image: NewCollege,
        school: "The New College",
        degree: "Bachelor's of Computer Science",
        year: "2018 - 2021",
    },
    {
        id: 3,
        image: School,
        school: "S.M Lohia Jr. College",
        degree: "12th Board",
        year: "2017 - 2018",
    },
    {
        id: 4,
        image: School,
        school: "S.M Lohia HighSchool",
        degree: "10th Board",
        year: "2016",
    }
];

export default function Education() {
    return (
        <section id="education">
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
            >
                <h2 className='headline-text'>Education</h2>
                <div>
                    {educationData.map((education) => (
                        <div className="education-card d-flex align-items-center justify-content-between mb-3" key={education.id}>
                            <div className='d-flex gap-2 align-items-center'>
                                <div><img src={education.image} alt={education.school} className='education-image rounded-circle' /></div>
                                <div className='d-flex flex-column education-content'>
                                    <span className='fw-bolder'>{education.school}</span>
                                    <small>{education.degree}</small>
                                </div>
                            </div>
                            <div><span className='text-muted education-year'>{education.year}</span></div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
