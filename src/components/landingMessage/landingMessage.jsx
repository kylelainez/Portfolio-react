import React from 'react';
import './landingMessage.css'

function landingMessage(){
    return <div className="landingMessage" id="landingMessage">
        <span className="small-heading">Hi, my name is</span>
        <span className="big-heading">Kyle Adrian Lainez.</span>
        <span className="big-heading">I'm a software engineer.</span>
        <div>
            <a href="/resume" target="_blank">View my Resume</a>
        </div>
       
    </div>
}

export default landingMessage;