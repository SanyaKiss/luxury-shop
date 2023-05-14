import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state: CartSliceState, action: PayloadAction<CartItem>) {
      state.cart.push(action.payload);
      state.totalPrice +=
        action.payload.quantity * action.payload.product.price;
    },
    removeProduct: (state: CartSliceState, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter(
        (obj) => obj.product.id !== action.payload.product.id
      );
      state.totalPrice = Math.round(
        state.totalPrice -
          action.payload.product.price * action.payload.quantity
      );
    },
    increaseCount(state: CartSliceState, action: PayloadAction<CartItem>) {
      state.cart = state.cart.map((item) => {
        if (JSON.stringify(item) === JSON.stringify(action.payload)) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
      state.totalPrice = Math.round(
        state.totalPrice + action.payload.product.price
      );
    },
    decreaseCount(state: CartSliceState, action: PayloadAction<CartItem>) {
      state.cart = state.cart.map((item) => {
        if (JSON.stringify(item) === JSON.stringify(action.payload)) {
          item.quantity -= 1;
          return item;
        }
        return item;
      });
      state.totalPrice = Math.round(
        state.totalPrice - action.payload.product.price
      );
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseCount,
  decreaseCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
