import React, { useState } from 'react';
import { Download, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Tooltip } from 'reactstrap'; // Import Tooltip from reactstrap

// Reusable Tooltip Component
const IconWithTooltip = ({ id, icon, tooltipText }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => {
        setTooltipOpen(!tooltipOpen);
    };

    return (
        <div className='personal-link-box'>
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
            />
            <IconWithTooltip
                id="linkedin"
                icon={(props) => <Linkedin {...props} />}
                tooltipText="LinkedIn"
            />
            <IconWithTooltip
                id="instagram"
                icon={(props) => <Instagram {...props} />}
                tooltipText="Instagram"
            />
            <IconWithTooltip
                id="mail"
                icon={(props) => <Mail {...props} />}
                tooltipText="Mail"
            />
            <IconWithTooltip
                id="download"
                icon={(props) => <Download {...props} />}
                tooltipText="Download Resume"
            />
        </div>
    );
}
