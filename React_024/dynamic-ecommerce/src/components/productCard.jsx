import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSLice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-64">
      <img className="w-full h-40 object-cover" src={product.thumbnail} alt="Product" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-gray-800 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-700">{Math.floor(product.rating)}⭐</p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
