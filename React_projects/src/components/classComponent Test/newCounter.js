import React, { Component } from "react";

export class NewCounter extends Component {
  state = { counter: 0 };
  render() {
    return (
      <div>
        newCounter
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment!
        </button>
        <Child value={this.state.counter} />
      </div>
    );
  }
}

export default NewCounter;

class Child extends Component {
  state = { counter: this.props.value };
  render() {
    return <h1>{this.state.counter}</h1>;
  }
}
