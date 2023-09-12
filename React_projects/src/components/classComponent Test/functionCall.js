import React, { Component } from "react";

export class FunctionCall extends Component {
  // getName() { return "test"}
  /////////////////
  //   constructor(props) {
  //     super(props);
  //     this.setState = { name: "testH" + this.props.name };
  //   }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h4", null, "hi,"),
      React.createElement("h4", null, "hay,"),
      "welcoms"
    );
    // (
    //   <div>
    //     {/* {this.getName()} */}
    //     {/* {this.props.name} */}
    //   </div>
    // );
  }
}

export default FunctionCall;
