import React, { useContext, useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Moon, Paperclip, Sun } from "lucide-react";
import { Tooltip } from "reactstrap";
import { ThemeContext } from "../context/ThemeContext";

const IconWithTooltip = ({ id, icon, tooltipText, onClick }) => {
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

    return (
        <div
            className="personal-link-box"
            id={id} // Apply id directly to the container
            onClick={onClick}
            style={{ cursor: "pointer" }}
            ref={tooltipRef}
        >
            {icon()}
            <Tooltip
                isOpen={tooltipOpen}
                target={id} // Use the same id here
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

    return (
        <div className="personal-links-box-down border p-2">
            <IconWithTooltip
                id="github-small"
                icon={() => <Github strokeWidth={1.25} />}
                tooltipText="GitHub"
                onClick={() =>
                    window.open("https://github.com/PrathameshBelvalkar", "_blank")
                }
            />
            <IconWithTooltip
                id="linkedin-small"
                icon={() => <Linkedin strokeWidth={1.25} />}
                tooltipText="LinkedIn"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/prathamesh-belvalkar-83b72a267/",
                        "_blank"
                    )
                }
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
                id="mail-small"
                icon={() => <Mail strokeWidth={1.25} />}
                tooltipText="Mail"
                onClick={() =>
                    window.open("mailto:pprathameshbelvalkar544@gmail.com", "_blank")
                }
            />
            <IconWithTooltip
                id="download-small"
                icon={() => <Paperclip strokeWidth={1.25} />}
                tooltipText="Download Resume"
                onClick={() => window.open("/resume.pdf", "_blank")}
            />
        </div>
    );
}
