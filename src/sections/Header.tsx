import React, { ChangeEvent, useState } from "react";
import "../scss/sections/Header.scss";
import { categories } from "../constants";
import { Link } from "react-router-dom";
import Input from "../components/UI/Input";
import { useAppDispatch } from "../store/store";
import { setSearchValue } from "../store/filters/slice";

type HeaderProps = {
  cropped?: boolean;
};

const Header: React.FC<HeaderProps> = ({ cropped }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <header className="header">
      <div className="header__top">
        <Link to="/" className="header__title">
          Luxury
        </Link>
        <Input
          text="Search product"
          color="#000000"
          background="#F9F9F9"
          textButton="Find"
          colorButton="#FFFFFF"
          backgroundButton="#2a254b"
          className="header__input"
          value={value}
          onChange={onChange}
        />
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
            src="images/header/menu.svg"
            alt="header__menu"
            className="header__menu"
          />
        </nav>
      </div>
      {!cropped && (
        <div className="header__bottom">
          <div className="header__links">
            {categories.map((item, index) => {
              if (item !== "All")
                return (
                  <Link to="/products" key={index} className="header__link">
                    {item}
                  </Link>
                );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
