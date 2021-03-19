import React from 'react';
import './container.css';
import LandingMessage from '../../components/landingMessage/landingMessage';
import About from '../../components/about/about';
import Projects from '../../components/projects/projects';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

function container(){
    return <div className="myContainer">
        <LandingMessage />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>;
}

export default container;