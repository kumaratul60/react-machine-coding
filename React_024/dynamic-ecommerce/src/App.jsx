import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./Layout";
import { routerAll } from "./router";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routerAll}>
          <Layout />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
