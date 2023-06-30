import React from "react";
import { Cart } from "../UI/Cart/Cart";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import { EmptyCart } from "../UI/Cart/EmptyCart";
import { useCart } from "../../store/store2";

export const CartPage: React.FC = () => {
  const cart = useCart(state => state.cart)

  if (cart.length == 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <Cart />
    </>
  );
};
