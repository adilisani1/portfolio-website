import React, { useState, createContext } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    const toggle = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            <div className={`theme ${theme}`}>{children}</div>
        </ThemeContext.Provider>
    )
}
