import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather  defaultCity="Kiev" />
      <footer>
        <a href="https://github.com/mariiapasko/react-weather-app" target="_blank"> Open-sourced on GitHub</a> by Mariia Pasko
      </footer>
      </div>
    </div>
  );
}
