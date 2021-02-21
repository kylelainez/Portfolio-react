import React from 'react';
import './projects.css';
import Chess from '../../Images/Chess.png';
import BuyAndSale from '../../Images/BuyAndSale.png';
import GoalTracker from '../../Images/GoalTracer.png';
import Convey from '../../Images/Convey.png';

function projects(){
    return <div className="projects" id="projects">
        <div className="project-list">
            <img src={Chess} />
        </div>
        
    </div>
}


export default projects;