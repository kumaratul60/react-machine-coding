import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();

    this.state = { count: 0 };
  }
  incrementCounter() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>counter</h1>
        hello3 {this.state.name11}
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Counter;
