import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Container from '../../components/container/container'
import './App.css';

function App() {
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
