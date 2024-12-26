import React from 'react';
import { motion } from "framer-motion";
export default function ContactUs() {
    return (
        <section id="contact-us" className='mb-5'>
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.9, ease: "easeOut" }}
            >
                <h2 className='text-center fw-bold display-3'>Get In Touch</h2>
                <small className='text-muted'>"Need assistance or have queries? Contact me via the provided form/email for prompt support.
                    I'm here to help!"
                </small>
                <div className="contact-content mt-2">
                    <form action="" autoComplete='off' className='contact-form row'>
                        <div className='col-md-6'>
                            <input type="text" name="name" id="contact_name" className='contact_input mb-2' placeholder='Enter Name' />
                            <input type="email" name="email" id="contact_email" className='contact_input mb-2' placeholder='Enter Mail' />
                            <input type="text" name="subject" id="contact_subject" className='contact_input mb-2' placeholder='Enter Subject' />
                        </div>
                        <div className='col-md-6'>
                            <textarea name="message" id="contact_message" className="contact_textarea" rows={5} placeholder='Enter Message'></textarea>
                        </div>
                        <div className='row m-auto'>
                            <button type='button' className='contact_submit m-auto'>Send Message</button>
                        </div>
                    </form>
                </div>
            </motion.div>
            <div className='mt-5'></div>
        </section>
    )
}
