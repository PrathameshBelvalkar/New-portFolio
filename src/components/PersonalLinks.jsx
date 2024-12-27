import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Paperclip } from 'lucide-react';
import { Tooltip } from 'reactstrap'; // Import Tooltip from reactstrap

// Reusable Tooltip Component
const IconWithTooltip = ({ id, icon, tooltipText, onClick }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => {
        setTooltipOpen(!tooltipOpen);
    };

    return (
        <div className='personal-link-box'
            onClick={onClick}
            style={{ cursor: 'pointer' }}>
            {icon({
                id,
                onMouseEnter: toggleTooltip,
                onMouseLeave: toggleTooltip
            })}
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
    return (
        <div className='personal-links-box border p-2'>
            <IconWithTooltip
                id="github"
                icon={(props) => <Github {...props} />}
                tooltipText="GitHub"
                onClick={() => window.open('https://github.com/PrathameshBelvalkar', '_blank')}
            />
            <IconWithTooltip
                id="linkedin"
                icon={(props) => <Linkedin {...props} />}
                tooltipText="LinkedIn"
                onClick={() => window.open('https://www.linkedin.com/in/prathamesh-belvalkar-83b72a267/', '_blank')}
            />
            <IconWithTooltip
                id="mail"
                icon={(props) => <Mail {...props} />}
                tooltipText="Mail"
                onClick={() => window.open('mailto:pprathameshbelvalkar544@gmail.com', '_blank')}
            />
            <IconWithTooltip
                id="download"
                icon={(props) => <Paperclip  {...props} />}
                tooltipText="Download Resume"
                onClick={() => window.open('/resume.pdf', '_blank')}
            />
        </div>
    );
}
