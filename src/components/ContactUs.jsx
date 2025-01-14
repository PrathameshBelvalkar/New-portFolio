import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FormFeedback } from 'reactstrap';
import { toast } from 'react-toastify';
export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            toast.error("Name should only contain alphabets and spaces.");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (subject.length < 3 || subject.length > 100) {
            toast.error("Subject should be between 3 and 100 characters.");
            return;
        }
        if (message.length < 10) {
            toast.error("Message should be at least 10 characters long.");
            return;
        }
        e.target.submit();
    };
    return (
        <section id="contact-us" className='mb-5'>
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 2.3, ease: "easeOut" }}
            >
                <h2 className='text-center fw-bold display-3'>Get In Touch</h2>
                <small className='text-muted'>"Need assistance or have queries? Contact me via the provided form/email for prompt support.
                    I'm here to help!"
                </small>
                <div className="contact-content mt-2">
                    <form
                        action="https://formspree.io/f/mgegeqjq"
                        autoComplete="off"
                        className="contact-form row"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="name"
                                id="contact_name"
                                className="contact_input mb-2"
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                id="contact_email"
                                className="contact_input mb-2"
                                placeholder="Enter Mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                id="contact_subject"
                                className="contact_input mb-2"
                                placeholder="Enter Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <textarea
                                name="message"
                                id="contact_message"
                                className="contact_textarea"
                                rows="5"
                                placeholder="Enter Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="row m-auto">
                            <button type="submit" className="contact_submit m-auto">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
            <div className='mt-5'></div>
        </section>
    )
}
