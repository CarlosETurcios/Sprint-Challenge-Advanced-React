import React from 'react';
import useDarkmode from './Hooks/useDarkMode'
const Nav = () => {

    const [darkMode, setDarkMode] = useDarkmode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }


    return (
        <nav className="navbar">
            <h1>Women's World Cup Searches </h1>
            <div className="darkmode-toggle">
                <div onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
}
export default Nav;