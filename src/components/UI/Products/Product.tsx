import React from "react";
import "../../../scss/UI/Products/Product.scss";
import { Link } from "react-router-dom";
import { ProductType } from "../../../stores/cart/store";

export const Product: React.FC<ProductType> = ({
  id,
  imgUrl,
  title,
  price,
}) => {
  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img src={imgUrl} alt={title} className="product__img" />
      </Link>
      <h4 className="product__title">{title}</h4>
      <p className="product__price">£{price}</p>
    </div>
  );
};
