/* eslint-disable react/prop-types */

import { connect } from "react-redux";
import { decrement, increment } from "./action.counterAction";

const CounterComponent = ({ count, increment, decrement }) => (
  <div>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

const mapStateToProps = (state) => ({ count: state.count });

export default connect(mapStateToProps, { increment, decrement })(CounterComponent);
