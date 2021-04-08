import React, { useEffect } from 'react';
import './about.css';
import MyImage from '../../Images/kyle.JPG';
import Skills from '../../components/skills/skills';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About(){

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return <div className="about" id="about" data-aos="zoom-in" data-aos-once>
        <h1> About Me</h1>
        <div className="aboutMe">
            <div className="text">
                <p>
                    Hello! I'm Kyle, a Software Engineer in Los Angeles, CA.
                    I enjoy programming a lot and creating things for the computer.
                    My goal is to create programs that can facilitate people's needs.
                </p>
                <Skills />
            </div>
            <img src={MyImage} alt="Kyle"/>
        </div>
    </div>;
}

export default About;