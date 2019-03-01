import React, { Component } from 'react';

import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <p>
            Applantic
          </p>
          {/* <a
            className="link"
            href="mailto:applantic@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            applantic@gmail.com
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
