import React from 'react';
import NavBar from '../../components/navbar/navbar';
import LandingMessage from '../../components/landingMessage/landingMessage';
import About from '../../components/about/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingMessage />
      <About />
    </div>
  );
}

export default App;
