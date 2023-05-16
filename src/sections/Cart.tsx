import React, { useState } from "react";
import "../scss/sections/Cart.scss";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Counter from "../components/UI/Counter";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cart/selectors";
import { CartItem } from "../store/cart/types";
import { useAppDispatch } from "../store/store";
import { removeProduct } from "../store/cart/slice";
import { Modal } from "../components/UI/Modal";

export const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDialog = () => setIsOpen(!isOpen);

  const dispatch = useAppDispatch();
  const { cart, totalPrice } = useSelector(selectCart);

  const handleRemove = (item: CartItem) => {
    dispatch(removeProduct(item));
  };

  return (
    <div className="cart">
      <div className="cart-heading">
        <p className="cart-heading__product content ">PRODUCT</p>
        <p className="cart-heading__price price column">PRICE</p>
        <p className="cart-heading__quantity quantity  column">QTY</p>
        <p className="cart-heading__unit-price unit-price  column">UNIT PRICE</p>
      </div>
      <div className="cart-products">
        {cart.map((item: CartItem) => (
          <div className="cart-product" key={item.product.id}>
            <img
              src="../../public/images/cart/del.png"
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
              <Counter item={item} />
            </div>
            <div className="cart-product__unit-price unit-price column">
              $ {item.quantity * item.product.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-check">
        <Input
          text="Voucher code"
          color="#000000"
          background="#F9F9F9"
          textButton="Redeem"
          colorButton="#FFFFFF"
          backgroundButton="#2a254b"
          className="voucher-input"
        />
        <div className="total">
          <div className="total__line">
            <p>Subtotal</p>
            <p>${totalPrice}</p>
          </div>
          <div className="total__line">
            <p>Shipping fee</p>
            <p>$0</p>
          </div>
          <div className="total__line">
            <p>Coupon</p>
            <p>No</p>
          </div>
          <div className="total__line">
            <h2>TOTAL</h2>
            <h2>${totalPrice}</h2>
          </div>
          <Button
            text="Check out"
            color="#2a254b"
            background="#f9f9f9"
            className="total__button"
            onClick={toggleDialog}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={toggleDialog} />
    </div>
  );
};
