import React from 'react';
import './skills.css';

function skills(){
    return <div className="skills" id="skills">
        <div>
            <h2>Languages I Know</h2>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
                <li>C++</li>
                <li>SQL</li>
            </ul>
        </div>
        <div>
            <h2>Libraries and Frameworks</h2>
            <ul>
                <li>React</li>
                <li>Django</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Bootstrap</li>
                <li>Socket.io</li>
                <li>Mongoose</li>
            </ul>
        </div>
        <div>
            <h2>Tools and Technology</h2>
            <ul>
                <li>Version Control</li>
                <li>Adobe XD</li>
                <li>AutoCAD</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Microsoft Office</li>
            </ul>
        </div>
    </div>
}

export default skills;