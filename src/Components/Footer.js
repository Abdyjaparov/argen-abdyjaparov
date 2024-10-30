import React from 'react';
import '../Style/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <p className='p1'>© 2024 Argen Abdyjaparov. All rights reserved.</p>
            <div className="footer-links">
                <a href="https://github.com/Abdyjaparov" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="/contact">Contact</a>
            </div>
            <p className='made-man'>Made by man from the earth. </p>
        </footer>
    );
};

export default Footer;