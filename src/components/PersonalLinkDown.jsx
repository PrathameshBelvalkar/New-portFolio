import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookText, Github, House, Linkedin, Moon, Paperclip, Sun } from "lucide-react";
import { Tooltip } from "reactstrap";
import { ThemeContext } from "../context/ThemeContext";

const IconWithTooltip = ({ id, icon, tooltipText, linkTo, onClick }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const tooltipRef = useRef(null);

    const toggleTooltip = () => {
        setTooltipOpen(!tooltipOpen);
    };

    const closeTooltip = (e) => {
        if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
            setTooltipOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeTooltip);
        return () => {
            document.removeEventListener("mousedown", closeTooltip);
        };
    }, []);

    const renderLink = () => {
        if (linkTo) {
            return linkTo.startsWith("http") ? (
                <a href={linkTo} target="_blank" rel="noopener noreferrer">
                    {icon()}
                </a>
            ) : (
                <Link to={linkTo}>{icon()}</Link>
            );
        }
        return <div onClick={onClick}>{icon()}</div>;
    };

    return (
        <div
            className="personal-link-box"
            id={id}
            style={{ cursor: "pointer" }}
            ref={tooltipRef}
        >
            {renderLink()}
            <Tooltip
                isOpen={tooltipOpen}
                target={id}
                toggle={toggleTooltip}
                placement="top"
            >
                {tooltipText}
            </Tooltip>
        </div>
    );
};

export default function PersonalLinkDown() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();

    return (
        <div className="personal-links-box-down border p-2">
            <IconWithTooltip
                id="github-small"
                icon={() => <Github strokeWidth={1.25} />}
                tooltipText="GitHub"
                linkTo="https://github.com/PrathameshBelvalkar"
            />
            <IconWithTooltip
                id="linkedin-small"
                icon={() => <Linkedin strokeWidth={1.25} />}
                tooltipText="LinkedIn"
                linkTo="https://www.linkedin.com/in/prathamesh-belvalkar-83b72a267/"
            />
            <IconWithTooltip
                id="theme-toggle"
                icon={() =>
                    theme === "light" ? (
                        <Sun strokeWidth={1.25} />
                    ) : (
                        <Moon strokeWidth={1.25} />
                    )
                }
                tooltipText={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                onClick={toggleTheme}
            />
            <IconWithTooltip
                id="blog-small"
                icon={(props) =>
                    location.pathname !== "/"
                        ? <House strokeWidth={1.25} {...props} />
                        : <BookText strokeWidth={1.25} {...props} />
                }
                tooltipText={location.pathname !== "/" ? "Home" : "Blog"}
                linkTo={location.pathname !== "/" ? "/" : "/blog"}
            />
            <IconWithTooltip
                id="download-small"
                icon={() => <Paperclip strokeWidth={1.25} />}
                tooltipText="Download Resume"
                linkTo="/resume.pdf"
            />
        </div>
    );
}
