import React, { useReducer, useEffect } from "react";

import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./ShowUI.css";
import ProductReducer from "./Reducer/ProductReducer";
import ProductList from "./Cards/ProductList";
import Cart from "./Cards/Cart";

function ShowEcomerceUI() {
  let currUrl = window.location.href;
  console.log("ccc", currUrl);
  const initialState = {
    products: [],
    loading: true,
    cart: [],
    showCartbtn: true,
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch({
        type: "ADD_PRODUCTS",
        payload: res,
      });
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/">
            <img
              className="logo"
              src="https://cdn.thebrandingjournal.com/wp-content/uploads/2019/05/chanel_logo_the_branding_journal.jpg"
              alt=""
            />
          </Link>

          {state.showCartbtn && (
            <Link to="/cart">
              <span>Go to Cart</span>
            </Link>
          )}
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<ProductList state={state} dispatch={dispatch} />}
          ></Route>
          <Route
            exact
            path="/cart"
            element={<Cart state={state} dispatch={dispatch} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default ShowEcomerceUI;
