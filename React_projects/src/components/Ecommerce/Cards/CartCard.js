import React from "react";
import styles from "./cart.module.css";

function CartCard({ item, state, dispatch }) {
  function incHandler() {
    dispatch({
      type: "INC_QTY",
      payload: item,
    });
  }
  function decHandler() {
    dispatch({
      type: "DEC_QTY",
      payload: item,
    });
  }
  return (
    <div className={styles.cartCardContainer}>
      <img src={item.image} className={styles.img} alt="" />
      <div className={styles.itemDetails}>
        <p>{item.title}</p>
        <p>${Math.floor(item.price)}</p>
        <p>{item.category}</p>
        <div className={styles.btnContain}>
          {" "}
          <button className={styles.btn} onClick={incHandler}>
            +
          </button>
          {item.qty}
          <button className={styles.btn} onClick={decHandler}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
