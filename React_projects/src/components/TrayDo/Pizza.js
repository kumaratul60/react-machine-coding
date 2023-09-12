import React, { useState } from "react";
import "./pizza.css";

function Pizza() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [isAddOns, setIsAddOns] = useState(false);
  const [discount, setDiscount] = useState();

  const handleChange = () => {
    if (quantity > 0) {
      updatePrice(quantity, !isAddOns);
      setIsAddOns(!isAddOns);
    }
    if (!isAddOns && quantity === 0)
      alert("please add some quantity to get Add Ons");
    // console.log(isAddOns);
  };

  const updatePrice = (qty, cur) => {
    let newPrice = qty * 50;
    if (cur) newPrice = newPrice + 50;

    setPrice(newPrice);
  };

  // 60% discounts condition
  let discountedPrice;
  if (discount <= 100) {
    discountedPrice = price - [price * (discount / 100)];
  } else {
    alert("you can get only 100% discount");
    discountedPrice = price;
  }

  return (
    <div className="main-Container">
      <h1> Pizza ABC</h1>
      <p>We are currently serving one pizza only. Please taste and review.</p>

      <div className="container">
        <div className="container__top">
          <span>Add Quantity</span>
          <div className="container__top--qty">
            <button
              className="pizza-btn"
              onClick={() => {
                setQuantity(quantity + 1);
                updatePrice(quantity + 1, isAddOns);
              }}
            >
              +
            </button>
            <h2 className="quantity">{quantity} </h2>
            <button
              className="pizza-btn"
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                  updatePrice(quantity - 1, isAddOns);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              checked={isAddOns}
              onChange={handleChange}
              className="inputCheckbox"
            />
            <h3>Add Ons</h3>
          </div>
        </div>
        <img
          className="pizzaImg"
          src="https://cdn.pixabay.com/photo/2012/04/12/20/43/pizza-30579__340.png"
          alt="pizzaImg"
        />
      </div>

      <div className="container__bottom">
        <span className="container__bottom--total">Total: </span>${price}.0
        <div className="container__bottom--discountWrapper">
          <span>Discount:</span>
          <input
            className="container__bottom--inputField"
            type="number"
            value={discount}
            placeholder="10%"
            onChange={(e) => setDiscount(e.target.value)}
          />{" "}
          %
        </div>
        <span className="container__bottom--toPay">To Pay: </span>$
        {discount ? discountedPrice : price}.0
      </div>
    </div>
  );
}

export default Pizza;
