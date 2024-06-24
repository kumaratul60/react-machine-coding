import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <nav className="bg-gray-800 p-4 flex justify-end gap-5">
      <Link to="/" className="text-white p-2">
        Home
      </Link>
      <Link to="/cart" className="text-white p-2">
        {`Cart (${items.length})`}
      </Link>
    </nav>
  );
};

export default NavigationMenu;
