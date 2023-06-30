import { create } from "zustand";
import { Store } from "./types";

export const useCart = create<Store>((set) => ({
  cart: [],
  totalPrice: 0,
  addProduct: (item) => {
    set((state) => {
      const { product, quantity } = item;
      const existingCartItem = state.cart.find(
        (cartItem) => cartItem.product.id === product.id
      );

      if (existingCartItem) {
        existingCartItem.quantity += quantity;
      } else {
        state.cart.push(item);
      }

      state.totalPrice += product.price * quantity;
      return { ...state };
    });
  },
  removeProduct: (item) => {
    set((state) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.product.id !== item.product.id
      );
      state.totalPrice = Math.round(
        state.totalPrice - item.product.price * item.quantity
      );
      return { ...state };
    });
  },
  increaseCount: (item) => {
    set((state) => {
      state.cart = state.cart.map((cartItem) => {
        if (JSON.stringify(cartItem) === JSON.stringify(item)) {
          cartItem.quantity += 1;
        }
        return cartItem;
      });
      state.totalPrice = Math.round(state.totalPrice + item.product.price);
      return { ...state };
    });
  },
  decreaseCount: (item) => {
    set((state) => {
      state.cart = state.cart.map((cartItem) => {
        if (JSON.stringify(cartItem) === JSON.stringify(item)) {
          cartItem.quantity -= 1;
        }
        return cartItem;
      });
      state.totalPrice = Math.round(state.totalPrice - item.product.price);
      return { ...state };
    });
  },
  clearCart: () => {
    set(() => ({
      cart: [],
      totalPrice: 0,
    }));
  },
}));
