import React from 'react';
import './container.css';
import LandingMessage from '../../components/landingMessage/landingMessage';
import About from '../../components/about/about';
import Skills from '../../components/skills/skills';

function container(){
    return <div className="container">
        <LandingMessage />
        <About />
        <Skills />
    </div>;
}

export default container;