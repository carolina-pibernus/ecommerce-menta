import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
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
          <Button compact onClick={this.handleDecrement}>
            -
          </Button>
          <Button compact onClick={this.handleIncrement}>
            +
          </Button>
        </div>
      </div>
    );
  }
}