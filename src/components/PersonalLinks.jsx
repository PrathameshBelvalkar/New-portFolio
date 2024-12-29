import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookText, Github, House, Instagram, Linkedin, Mail, Paperclip } from 'lucide-react';
import { Tooltip } from 'reactstrap'; // Import Tooltip from reactstrap

// Reusable Tooltip Component
const IconWithTooltip = ({ id, icon, tooltipText, linkTo }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => {
        setTooltipOpen(!tooltipOpen);
    };

    return (
        <div className='personal-link-box' style={{ cursor: 'pointer' }}>
            <Link to={linkTo}>
                {icon({
                    id,
                    onMouseEnter: toggleTooltip,
                    onMouseLeave: toggleTooltip,
                })}
            </Link>
            <Tooltip
                isOpen={tooltipOpen}
                target={id}
                toggle={toggleTooltip}
                placement="left"
            >
                {tooltipText}
            </Tooltip>
        </div>
    );
};

export default function PersonalLinks() {
    const location = useLocation();

    return (
        <div className='personal-links-box border p-2'>
            <IconWithTooltip
                id="github"
                icon={(props) => <Github strokeWidth={1.25} {...props} />}
                tooltipText="GitHub"
                linkTo="//github.com/PrathameshBelvalkar"
            />
            <IconWithTooltip
                id="linkedin"
                icon={(props) => <Linkedin strokeWidth={1.25} {...props} />}
                tooltipText="LinkedIn"
                linkTo="//www.linkedin.com/in/prathamesh-belvalkar-83b72a267/"
            />
            <IconWithTooltip
                id="stories"
                icon={(props) =>
                    location.pathname !== '/' ? <House strokeWidth={1.25} {...props} /> : <BookText strokeWidth={1.25} {...props} />
                }
                tooltipText={location.pathname !== '/' ? "Home" : "Blog"}
                linkTo={location.pathname !== '/' ? '/' : '/blog'}
            />
            {/* <IconWithTooltip
                id="mail"
                icon={(props) => <Mail {...props} />}
                tooltipText="Mail"
                linkTo="mailto:pprathameshbelvalkar544@gmail.com" // Mail link
            /> */}
            <IconWithTooltip
                id="download"
                icon={(props) => <Paperclip strokeWidth={1.25} {...props} />}
                tooltipText="Download Resume"
                linkTo="/resume.pdf"
            />
        </div>
    );
}
