import React from 'react';
import './about.css';
import MyImage from '../../Images/kyle.JPG';
import Skills from '../../components/skills/skills';

function about(){
    return <div className="about" id="about">
        <h1> About Me.</h1>
        <div className="aboutMe">
            <div>
                <p>
                    Helo! I'm Kyle, a recent graduate of Software Engineering Immersive program at General Assembly.
                    I enjoy programming a lot and creating things for the computer.
                    My goal is to create programs that can facilitate people's needs.
                </p>
                <Skills />
            </div>
            <img src={MyImage} alt="Kyle"/>
        </div>
    </div>;
}

export default about;