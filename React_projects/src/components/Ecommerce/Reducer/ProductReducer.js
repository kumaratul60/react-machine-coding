export const initialState = {
  products: [],
  loading: true,
  cart: [],
  showCartbtn: true,
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS": {
      return {
        ...state,
        products: action.payload.data,
        loading: false,
      };
    }
    case "ADD_TO_CART": {
      console.log("state", state);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "REMOVE_FROM_CART": {
      let filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: filteredCart,
      };
    }
    case "INC_QTY": {
      let mappedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: mappedCart,
      };
    }
    case "DEC_QTY": {
      let mappedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qty: item.qty > 0 ? item.qty - 1 : 0,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: mappedCart,
      };
    }
    case "HIDE_CART": {
      return {
        ...state,
        showCartbtn: false,
      };
    }
    case "SHOW_CART": {
      console.log("show", state);
      return {
        ...state,
        showCartbtn: true,
      };
    }
    case "SORT_LOW": {
      console.log("show", state);
      return {
        ...state,
        products: action.payload,
      };
    }
    case "SORT_HIGH": {
      console.log("show", state);
      return {
        ...state,
        products: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default ProductReducer;
