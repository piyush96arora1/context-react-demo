import React, { Component } from 'react';
import {GrandParent} from './GrandParent'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <br></br>
        <GrandParent/>
        </header>
      </div>
    );
  }
}

export default App;
