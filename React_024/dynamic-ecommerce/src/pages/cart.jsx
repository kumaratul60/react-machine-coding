import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSLice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="border p-4 mb-2">
              <img className="" src={item.thumbnail} alt="product img" />
              <h2>{item.title}</h2>
              <p>{item.category}</p>
              <p>{Math.floor(item.rating)}⭐</p>
              <button
                className="bg-red-500 text-white p-2 mt-2"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
