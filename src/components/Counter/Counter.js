import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './Counter.css'

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement = () => {
      if (this.state.count > 0) {
    this.setState({ count: this.state.count - 1 });
      }
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <div>
          <button className="ui button compact" onClick={this.handleDecrement}>
            -
          </button>
          <button className="ui button compact" onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}