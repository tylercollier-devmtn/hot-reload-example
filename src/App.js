import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SomeComponent from './SomeComponent';


class App extends Component {
  state = {
    counter: 0
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/something">Something</Link>
        </nav>
        <div>
          Local state counter: {this.state.counter}
          <div><button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click me</button></div>
        </div>
        <Route exact path="/" render={() => {
          return <div>
            <h1>Home</h1>
            <SomeComponent />
          </div>
        }} />
        <Route path="/something" render={() => {
          return <div>
            <h1>Something route</h1>
            <SomeComponent />
          </div>
        }} />
      </div>
    );
  }
}

export default App;
