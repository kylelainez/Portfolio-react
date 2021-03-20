import React from 'react';
import './landingMessage.css'
import Resume from '../../files/Kyle Lainez - Resume.pdf';

function landingMessage(){
    return <div className="landingMessage" id="landingMessage">
        <span className="small-heading">Hi, my name is</span>
        <span className="big-heading">Kyle Adrian Lainez.</span>
        <span className="big-heading">I'm a Software Engineer.</span>
        <div>
            <a href={Resume} target="_blank" rel="noreferrer">View my Resume</a>
        </div>
       
    </div>
}

export default landingMessage;