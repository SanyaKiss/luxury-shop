import React from "react";
import { Cart } from "../UI/Cart/Cart";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import { EmptyCart } from "../UI/Cart/EmptyCart";

export const CartPage: React.FC = () => {
  const { cart } = useSelector(selectCart);

  if (cart == 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <Cart />
    </>
  );
};
