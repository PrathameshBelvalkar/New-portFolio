import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-bs-theme", theme);
        if (theme === "dark") {
            root.style.setProperty("--primary-color", "#ffffff");
            root.style.setProperty("--secondary-color", "#bbbbbb");
            root.style.setProperty("--background-color", "#08090a");
            root.style.setProperty("--background-color-pattern", "#222222");
            root.style.setProperty("--editor-action-list", "#1a1a1a");
            root.style.setProperty("--editor-action-menu-buttons", "#060606");
            root.style.setProperty("--editor-action-buttons", "#242424");
        } else {
            root.style.setProperty("--primary-color", "#08090a");
            root.style.setProperty("--secondary-color", "#737373");
            root.style.setProperty("--background-color", "#ffffff");
            root.style.setProperty("--background-color-pattern", "#f9f6f6");
            root.style.setProperty("--editor-action-list", "#ffffff");
            root.style.setProperty("--editor-action-menu-buttons", "#ffffff");
            root.style.setProperty("--editor-action-buttons", "#ededed");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
