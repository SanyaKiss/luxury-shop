import React from "react";
import { Cart } from "../sections/Cart";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cart/selectors";
import { EmptyCart } from "../components/EmptyCart";

const CartPage: React.FC = () => {
  const { cart } = useSelector(selectCart);

  if (cart==0) {
    return <EmptyCart/>
  }

  return (
    <>
    <Cart/>
    </>
  );
};

export default CartPage;
