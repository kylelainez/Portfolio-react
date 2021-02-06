import React from 'react';
import NavBar from '../../components/navbar/navbar';
import LandingMessage from '../../components/landingMessage/landingMessage';
import About from '../../components/about/about';
import Skills from '../../components/skills/skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <LandingMessage />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
