import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSLice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
