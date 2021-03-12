import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Container from '../../components/container/container'
import LeftComponent from '../../components/leftComponent/leftComponent';
import RightComponent from '../../components/rightComponent/rightComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <LeftComponent />
        <Container />
        <RightComponent />
      </div>
    </div>
  );
}

export default App;
