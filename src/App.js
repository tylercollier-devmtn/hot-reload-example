import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    axios.get('https://apis.devmountain.com/gods/', {
      headers: {
        apikey: 'tylercollier'
      }
    }).then(response => {
      console.log('-------------- response.data', response.data);
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          counter: {this.state.counter}
          <div><button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click me</button></div>
        </div>
      </div>
    );
  }
}

export default App;
