import React from "react";

class AppClass extends React.Component {
  render() {
    return (
      <section>
        <h1>hay</h1>
        {React.Children.only(this.props.Children)}
      </section>
    );
  }
}
export default AppClass;
