import React, { Component } from "react";

export class StateExample extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.updateCount = this.updateCount.bind(this);
  }
  updateCount() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("in callback: " + this.state.count);
    });
    console.log("After setState:", this.state.count);
  }
  render() {
    console.log("render", this.state.count);
    return (
      <div>
        StateExample
        <button onClick={this.updateCount}>Update count</button>
      </div>
    );
  }
}

export default StateExample;
