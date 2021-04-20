import React from 'react';
import './navbar.css';
import Resume from '../../files/Kyle Lainez - Resume.pdf';

function navbar(){
    function scroll(scrollId){
       const element = document.querySelector(scrollId);

       window.scrollTo({
           top: element.offsetTop,
           left: 0,
           behavior: 'smooth'
       });
    }

    function toggleBurger(e) {
        e.preventDefault();
        e.target.classList.toggle('active');

        document.querySelector('nav ul').classList.toggle('active');
    }

    return (
        <header>
            <nav>
                <div className="icon">
                    KL
                </div>
                <ul className="links">
                    <li onClick={() => scroll('#about')}>About</li>
                    <li onClick={() => scroll('#projects')}>Projects</li>
                    <li onClick={() => scroll('#contact')}>Contact</li>
                    <li><a href={Resume} target="_blank" id="resume" rel="noreferrer">Resume</a></li>
                </ul>
            </nav>
            <div className='navButton'>
                <div className="burger" onClick={toggleBurger}></div>
            </div>
        </header>
       
    )
}
export default navbar;