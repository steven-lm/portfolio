
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './Day';

function App() {
  useEffect(() => {
    Day();
    window.addEventListener('resize', () => {window.location.reload();});
  }, [])

  return (
    <div className="App">
      <div id="background">
        <canvas id="bgCanvas"></canvas>
      </div>
      <div className="info-container">
        <div className="info-name">Hello</div>
      </div>
      <div className="main-container">
        <div className="first-block">
          Hello again
        </div>
      </div>
    </div>
  );
}

export default App;
