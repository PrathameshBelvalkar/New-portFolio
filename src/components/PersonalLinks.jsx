import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookText, Github, House, Instagram, Linkedin, Mail, Paperclip } from 'lucide-react';
import { Tooltip } from 'reactstrap'; // Import Tooltip from reactstrap

// Reusable Tooltip Component
const IconWithTooltip = ({ id, icon, tooltipText, linkTo, useAnchor }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => {
        setTooltipOpen(!tooltipOpen);
    };

    return (
        <div className="personal-link-box" style={{ cursor: 'pointer' }}>
            {useAnchor ? (
                <a
                    href={linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={toggleTooltip}
                    onMouseLeave={toggleTooltip}
                >
                    {icon({ id })}
                </a>
            ) : (
                <Link
                    to={linkTo}
                    onMouseEnter={toggleTooltip}
                    onMouseLeave={toggleTooltip}
                >
                    {icon({ id })}
                </Link>
            )}
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
        <div className="personal-links-box border p-2">
            <IconWithTooltip
                id="github"
                icon={(props) => <Github strokeWidth={1.25} {...props} />}
                tooltipText="GitHub"
                linkTo="//github.com/PrathameshBelvalkar"
                useAnchor={true}
            />
            <IconWithTooltip
                id="linkedin"
                icon={(props) => <Linkedin strokeWidth={1.25} {...props} />}
                tooltipText="LinkedIn"
                linkTo="//www.linkedin.com/in/prathamesh-belvalkar-83b72a267/"
                useAnchor={true}
            />
            <IconWithTooltip
                id="stories"
                icon={(props) =>
                    location.pathname !== '/' ? (
                        <House strokeWidth={1.25} {...props} />
                    ) : (
                        <BookText strokeWidth={1.25} {...props} />
                    )
                }
                tooltipText={location.pathname !== '/' ? "Home" : "Blog"}
                linkTo={location.pathname !== '/' ? '/' : '/blog'}
                useAnchor={false}
            />
            <IconWithTooltip
                id="download"
                icon={(props) => <Paperclip strokeWidth={1.25} {...props} />}
                tooltipText="Download Resume"
                linkTo="/prathamesh_belvalkar_2025.pdf"
                useAnchor={true}
            />
        </div>
    );
}
