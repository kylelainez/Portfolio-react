import React from 'react';
import NavBar from '../../components/navbar/navbar';
import LandingMessage from '../../components/landingMessage/landingMessage';
import About from '../../components/about/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <LandingMessage />
        <About />
      </div>
    </div>
  );
}

export default App;
