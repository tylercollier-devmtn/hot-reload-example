import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './ducks/reducer';

class SomeComponent extends Component {
  render() {
    return <div>
      Global counter: {this.props.globalCounter}
      <button onClick={this.props.increment}>Click to increment global counter</button>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    globalCounter: state.globalCounter
  }
}

const mapDispatchToProps = {
  increment: increment
};

export default connect(mapStateToProps, mapDispatchToProps)(SomeComponent)
