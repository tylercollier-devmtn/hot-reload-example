import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

class SomeComponent extends Component {
  render() {
    return <div>
      Global counter: {this.props.globalCounter}
      <button onClick={this.props.increment}>Click to increment global counter</button>
    </div>
  }
}

const ConnectedSomeComponent = connect(state => ({ globalCounter: state.globalCounter }), {
  increment: () => ({ type: 'INCREMENT' })
})(SomeComponent)

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
          <div><button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click me2</button></div>
        </div>
        <Route exact path="/" render={() => {
          return <div>
            <h1>Home</h1>
            <ConnectedSomeComponent />
          </div>
        }} />
        <Route path="/something" render={() => {
          return <div>
            <h1>Something route</h1>
            <ConnectedSomeComponent />
          </div>
        }} />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/something">Something</Link>
        </nav>
      </div>
    );
  }
}

export default App;
