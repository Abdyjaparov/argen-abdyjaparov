import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Achivement from './Pages/Achivement';
import Projects from './Pages/Projects';
import './App.css';
import './Style/About.css';
import './Style/Home.css';
import './Style/Navbar.css';
import './Style/Footer.css';
import './Style/Achivement.css';
import './Style/Projects.css';





const App = () => {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/achivement" element={<Achivement />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};


export default App;
