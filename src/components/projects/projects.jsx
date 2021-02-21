import React from 'react';
import './projects.css';
import Chess from '../../Images/Chess.png';
import BuyAndSale from '../../Images/BuyAndSale.png';
import GoalTracker from '../../Images/GoalTracker.png';
import Convey from '../../Images/Convey.png';

function projects(){
    return <div className="projects" id="projects">
        <h1>Projects</h1> 
        <div>
            <div className="project-list">
                <img src={Chess} />
                <ul className="technologies">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className="project-list">
                <img src={BuyAndSale} />
                <ul className="technologies">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Passport.js</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className="project-list">
                <img src={GoalTracker} />
                <ul className="technologies">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>PostgreSQL</li>
                    <li>AWS S3</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="project-list">
                <img src={Convey} />
                <ul className="technologies">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Socket.io</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>AWS S3</li>
                </ul>
            </div>
        </div>
    </div>
}


export default projects;