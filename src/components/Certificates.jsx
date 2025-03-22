import React from 'react';
import { motion } from "framer-motion";
import ResponsiveWeb from "../assets/images/certificates/ResponsiveWeb.png";
import ReactCertificate from "../assets/images/certificates/React.jpg";
import Tanstack from "../assets/images/certificates/TanstackQuery.jpg";
import Fancybox from './lib/Fancybox';

export default function Certificates() {
    return (
        <section id="certificates">
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.9, ease: "easeOut" }}
            >
                <h2 className='headline-text'>Certifications</h2>
                <div className='row text-center'>
                    <div className="col-md-4 col-sm-4 mb-1">
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a data-fancybox="gallery" href={ResponsiveWeb} >
                                <img src={ResponsiveWeb} alt="web development" className='certificate-image' />
                            </a>
                        </Fancybox>
                    </div>
                    <div className="col-md-4 col-sm-4 mb-1">
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a data-fancybox="gallery" href={Tanstack} >
                                <img src={Tanstack} alt="Tanstack Query certification" className='certificate-image' />
                            </a>
                        </Fancybox>
                    </div>
                    <div className="col-md-4 col-sm-4 mb-1">
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a data-fancybox="gallery" href={ReactCertificate} >
                                <img src={ReactCertificate} alt="React Js certification" className='certificate-image' />
                            </a>
                        </Fancybox>
                    </div>
                    {/* <div className="col-md-4 col-sm-4 mb-1">
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a data-fancybox="gallery" href={MoreSoon} >
                                <img src={MoreSoon} alt="More certificates coming soon" className='certificate-image' />
                            </a>
                        </Fancybox>
                    </div> */}
                </div>
                <hr />
            </motion.div>
        </section>

    )
}
