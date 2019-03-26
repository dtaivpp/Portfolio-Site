import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './componenets/About'
import About from './componenets/About';
import Experience from './componenets/Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <About card="about"/>
          <Experience card="experience" />
        </header>
      </div>
    );
  }
}

export default App;
