import React, { useState } from "react";
import "../../scss/components/UI/Modal.scss";
import { useNavigate } from "react-router";
import { clearCart } from "../../store/cart/slice";
import Button from "./Button";
import { useAppDispatch } from "../../store/store";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalType> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = () => {
    setSuccess(true);
  };

  const returnToHome = () => {
    navigate("/");
    dispatch(clearCart());
  };

  return (
    <div>
      {isOpen && (
        <div className="dialog">
          {!success ? (
            <div className="dialog__content">
              <h2>Place order</h2>
              <p> Do you submit placing order?</p>
              <div className="dialog__buttons">
                <Button
                  text="Cancel"
                  color="#FFFFFF"
                  background="#2a254b"
                  className="dialog__button"
                  onClick={onClose}
                />
                <Button
                  text="Agree"
                  color="#2a254b"
                  background="#f9f9f9"
                  className="dialog__button"
                  onClick={onSubmit}
                />
              </div>
            </div>
          ) : (
            <div className="dialog__content">
              <h2>Your order placed successfully!</h2>
              <Button
                text="Return to home page"
                color="#2a254b"
                background="#f9f9f9"
                className="dialog__button"
                onClick={returnToHome}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Modal