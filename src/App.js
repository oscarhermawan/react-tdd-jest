import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Content } from './components'

class App extends Component {
  constructor(){
    super()
    this.state = {
      task : {
        id:3, task:'learn php', value:'done'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This app do something! Let's develop this app using TDD!
        </p>
        <Content task={this.state.task} />
      </div>
    );
  }
}

export default App;
