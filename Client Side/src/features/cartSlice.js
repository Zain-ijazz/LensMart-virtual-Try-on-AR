// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((product) => product._id === action.payload._id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { productPrice, quantity } = cartItem;
          const itemTotal = productPrice * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((product) => product._id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product._id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product._id === action.payload) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    },

    resetCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    
    },


  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
 resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
