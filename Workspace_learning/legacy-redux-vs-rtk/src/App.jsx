import { Provider } from "react-redux";
import "./App.css";
import React, { useState, useEffect, useMemo } from "react";

// import store from "./components/legacy-redux/store";
// import CounterComponent from "./components/legacy-redux/main.connectCounter";

import CounterComponent from "./components/redux-tool-kit/main.rtk.counterConnect";
import store from "./components/redux-tool-kit/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          {/* <CounterComponent /> */}
          <CounterComponent />
        </div>
      </Provider>
    </>
  );
}

export default App;
