import React, { useEffect, useState } from "react";
import "../../scss/layout/Header.scss";
import { categories } from "../../constants";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { changeCategory } from "../../store/filters/slice";
import { useAuth } from "../../context/AuthProvider";
import { SignModal } from "../UI/SignModal";

type HeaderProps = {
  cropped?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ cropped }) => {
  const dispatch = useAppDispatch();
  const { logout, user } = useAuth();
  const [userPopupOpen, setUserPopupOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);

  const toggleDialog = () => setModalOpen(!ModalOpen);

  const handleUserClick = () => {
    setUserPopupOpen(!userPopupOpen);
  };

  return (
    <header className="header">
      <div className="header__top">
        <Link to="/" className="header__title">
          Luxury
        </Link>
        <nav className="header__navbar">
          <Link to="/products" className="header__products">
            Products
          </Link>
          <Link to="/about" className="header__about">
            About us
          </Link>
          <Link to="/cart">
            <img
              src="images/header/cart.svg"
              alt="Cart"
              className="header__cart"
            />
          </Link>
          <img
            src="images/header/user-icon.png"
            alt="user"
            className="header__user"
            onClick={handleUserClick}
          />
        </nav>
      </div>
      {!cropped && (
        <div className="header__bottom">
          <div className="header__links">
            {categories.map((item, index) => {
              if (item !== "All")
                return (
                  <Link
                    to="/products"
                    key={index}
                    onClick={() => dispatch(changeCategory(item))}
                    className="header__link"
                  >
                    {item}
                  </Link>
                );
            })}
          </div>
        </div>
      )}
      {userPopupOpen && (
        <div className="user-popup">
          <div className="user-popup__content">
            {user ? (
              <>
                <div className="user-popup__info">
                  <p className="user-popup__username">{user?.displayName}</p>
                  <p className="user-popup__email">{user?.email}</p>
                </div>
                <button className="user-popup__button" onClick={() => logout()}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="user-popup__button user-popup__button_signup"
                  onClick={toggleDialog}
                >
                  Sign Up
                </button>
                <button className="user-popup__button" onClick={toggleDialog}>
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
      )}
      <SignModal isOpen={ModalOpen} onClose={toggleDialog} />
    </header>
  );
};