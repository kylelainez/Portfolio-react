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
                    <li>JWT</li>
                    <li>AWS S3</li>
                </ul>
            </div>
        </div>
        <div className="more-projects-container">
            <span id="more-project-button">More Projects</span>
            <div className="more-projects">
                {/* HTML PROJECTS */}
                <div>
                    <h2>HTML</h2>
                    <div>
                        <div>
                            <span className="project-title">Expense Tracker</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                            A simple website that can be used to track your expenses. This uses the Cloud Firestore of Firebase as database.
                        </span>
                    </div>
                    <div>
                        <div>
                            <span className="project-title">Sorting Algorithms Visualization</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                            A visualizer inspired from Clement Mihailescu's project.
                        </span>
                    </div>
                    <div>
                        <div>
                            <span className="project-title">Portfolio V1</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                            My personal website.
                        </span>
                    </div>
                </div>
                {/* C++ PROJECTS */}
                <div>
                    <h2>C++</h2>
                    <div>
                        <div>
                            <span className="project-title">Address Book</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                            A simple CRUD application that uses a .txt file as database.
                        </span>
                    </div>
                    <div>
                        <div>
                            <span className="project-title">Concert Reservation System</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                            A console application for seat reservation on a concert.
                        </span>
                    </div>
                    <div>
                        <div>
                            <span className="project-title">Line Following Robot (Arduino)</span>
                            <a href="#" className="github"></a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="project-title">Sumobot (Arduino)</span>
                            <a href="#" className="github"></a>
                        </div>
                    </div>
                </div>
                {/* Java PROJECTS */}
                <div>
                    <h2>Java</h2>
                    <div>
                        <div>
                            <span className="project-title">Spot-It (Android)</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                            A service/commodity location finder where you can look for restaurants, convenience stores, computer shops, laundry shop and other services within 1km of PUP College of Engineering and Architecture.
                        </span>
                    </div>
                    <div>
                        <div>
                            <span className="project-title">FlowFive App (Android)</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                            A android app made for our thesis for controlling our system.
                        </span>
                    </div>
                    <div>
                        <div>
                            <span className="project-title">Queueing System</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                            A queueing system made for a small clinic in manila. It composes of 2 applications. 1 for the Reception and 1 for the Doctors.
                        </span>
                    </div>
                </div>
                {/* Java PROJECTS */}
                <div>
                    <h2>Python</h2>
                    <div>
                        <div>
                            <span className="project-title">FlowFive (Raspberry Pi)</span>
                            <a href="#" className="github"></a>
                        </div>
                        <span className="project-description"> 
                        A program for controlling the hardware on our system for our thesis, Automated Honey Harvester.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default projects;