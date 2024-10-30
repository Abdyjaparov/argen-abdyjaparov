import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';  

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="hamburger-menu" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/achievements" onClick={toggleMenu}>Achievement</Link>
                <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                <Link to="/about" onClick={toggleMenu}>About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
