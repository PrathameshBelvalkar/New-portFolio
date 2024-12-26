import React from 'react'
import { motion } from "framer-motion";
import { Col, Row } from 'reactstrap';
export default function ContactUs() {
    return (
        <section id="contact-us">
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.9, ease: "easeOut" }}
            >
                <h2 className='text-center fw-bold display-3'>Get In Touch</h2>
                <Row>
                    <Col md="6"></Col>
                    <Col md="6">
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.744003336529!2d74.22340751110463!3d16.689689022462233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1001071eccf71%3A0xbe4c888cb481c1f8!2sVardhaman%20Sankul%2C%20Mandlik%20Galli%2C%20Mangalwar%20Peth%2C%20Manganwlar%20Peth%2C%20Kolhapur%2C%20Maharashtra%20416012!5e0!3m2!1sen!2sin!4v1735227905237!5m2!1sen!2sin"
                            width="100%"
                            height={200}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        /> */}
                    </Col>
                </Row>


            </motion.div>
        </section>
    )
}
