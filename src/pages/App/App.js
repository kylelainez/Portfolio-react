import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Container from '../../components/container/container'
import './App.css';
import smoothscroll from 'smoothscroll-polyfill';

function App() {
  smoothscroll.polyfill();
  return (
    <div className="App">
      <NavBar />
      <div>
        <Container />
      </div>
    </div>
  );
}

export default App;
