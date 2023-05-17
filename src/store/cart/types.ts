import { ProductType } from "../products/types";

export type CartSliceState = {
  cart: CartItem[];
  totalPrice: number;
};

export type CartItem = {
  product: ProductType;
  quantity: number;
};
