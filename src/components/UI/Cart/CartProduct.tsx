import React, { useState } from "react";
import "../../../scss/UI/Cart/СartProduct.scss";

import { CartItem } from "../../../store/cart/types";
import {
  removeProduct,
  increaseCount,
  decreaseCount,
} from "../../../store/cart/slice";
import { useAppDispatch } from "../../../store/store";
import { Counter } from "../Counter";

type CartProductProps = {
  item: CartItem;
};

export const CartProduct: React.FC<CartProductProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(item.quantity);

  const handleRemove = (item: CartItem) => {
    dispatch(removeProduct(item));
  };

  const increase = (item: CartItem) => {
    setCount(count + 1);
    dispatch(increaseCount(item));
  };

  const decrease = (item: CartItem) => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(decreaseCount(item));
    }
  };

  return (
    <div className="cart-product" key={item.product.id}>
      <img
        src="public/images/cart/del.png"
        alt="remove product"
        onClick={() => handleRemove(item)}
        className="cart-product__remove-btn"
      />
      <div className="cart-product__content content ">
        <div className="cart-product__img">
          <img src={item.product.imgUrl} alt="" />
        </div>
        <div className="cart-product__title ">{item.product.title}</div>
      </div>
      <div className="cart-product__price price column ">
        $ {item.product.price}
      </div>
      <div className="cart-product__quantity quantity column">
        <Counter
          count={count}
          increase={() => increase(item)}
          decrease={() => decrease(item)}
        />
      </div>
      <div className="cart-product__unit-price unit-price column">
        $ {item.quantity * item.product.price}
      </div>
    </div>
  );
};
