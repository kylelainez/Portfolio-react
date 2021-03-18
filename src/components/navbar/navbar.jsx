import React from 'react';
import './navbar.css';
import Resume from '../../files/Kyle Lainez - Resume.pdf';

function navbar(){
    return (
        <header>
            <nav>
                <div className="icon">
                    KL
                </div>
                <div className="links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href={Resume} target="_blank" id="resume">Resume</a>
                </div>
            </nav>
        </header>
       
    )
}
export default navbar;