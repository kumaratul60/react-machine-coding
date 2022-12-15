import React, { useEffect } from "react";
import styles from "./cart.module.css";
import CartCard from "./CartCard";

function Cart({ state, dispatch }) {
  useEffect(() => {
    dispatch({
      type: "HIDE_CART",
    });
  }, []);
  const total = state.cart.reduce((acc, curr) => {
    acc += Math.floor(curr.qty * curr.price);
    return acc;
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <h3>Total: {total}</h3>
      {state.cart.map((item) => {
        return <CartCard item={item} state={state} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default Cart;
