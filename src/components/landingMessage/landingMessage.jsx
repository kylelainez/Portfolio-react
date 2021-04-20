import React, { useEffect } from 'react';
import './landingMessage.css'
import Resume from '../../files/Kyle Lainez - Resume.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';

function LandingMessage(){

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    
    return <div className="landingMessage" id="landingMessage">
        <span className="small-heading" data-aos="fade" data-aos-once data-aos-delay="50" >Hi, my name is</span>
        <span className="big-heading" data-aos="fade" data-aos-once data-aos-delay="1000" >Kyle Adrian Lainez.</span>
        <span className="big-heading" data-aos="fade" data-aos-once data-aos-delay="2000" >I'm a Software Engineer.</span>
        <div data-aos="fade" data-aos-once data-aos-delay="3000">
            <a href={Resume} target="_blank" rel="noreferrer">View my Resume</a>
        </div>
       
    </div>
}

export default LandingMessage;