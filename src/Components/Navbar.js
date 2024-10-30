import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Novbar.css';  

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> My Portfolio</h1>
            <div className="nav-links">
                <Link to="/">Home</Link> 
                <Link to="/achivements">Achivement</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;