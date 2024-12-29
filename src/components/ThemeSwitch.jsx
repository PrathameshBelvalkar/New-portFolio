import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from "framer-motion";
export default function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <motion.button className='switch-button' aria-label="Switch Theme" onClick={toggleTheme} whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            {theme === "light" ? <Sun strokeWidth={1.25} /> : <Moon strokeWidth={1.25} />}
        </motion.button>
    )
}
