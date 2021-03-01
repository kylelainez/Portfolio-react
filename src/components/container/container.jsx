import React from 'react';
import './container.css';
import LandingMessage from '../../components/landingMessage/landingMessage';
import About from '../../components/about/about';
import Skills from '../../components/skills/skills';
import Projects from '../../components/projects/projects';
import Contact from '../../components/contact/contact';

function container(){
    return <div className="myContainer">
        <LandingMessage />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>;
}

export default container;