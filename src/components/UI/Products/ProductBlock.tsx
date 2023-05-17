import React, { useState } from "react";
import axios from "axios";
import "../../../scss/UI/Products/ProductBlock.scss";

import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "../../../store/store";
import { addProduct } from "../../../store/cart/slice";
import { Loader } from "../Loader";
import { Counter } from "../Counter";
import { ProductType } from "../../../store/products/types";
import { Button } from "../Button";

export const ProductBlock: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [count, setCount] = useState<number>(1);
  const [product, setProduct] = React.useState<ProductType>();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get<ProductType>(
          `https://637374ac348e9472990cef38.mockapi.io/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    }

    fetchProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) return <Loader />;

  const addToCart = () => {
    dispatch(
      addProduct({
        product,
        quantity: count,
      })
    );
    setCount(1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="product-block">
      {product.id === id ? (
        <>
          <img src={product.imgUrl} className="product-block__img" />
          <div className="product-block__content">
            <div className="product-block__container">
              <h2 className="product-block__title">{product.title}</h2>
              <h3 className="product-block__price">£{product.price}</h3>
              <p className="product-block__description">
                {product.description}
              </p>
              <div className="product-block__btn-container">
                <Button
                  text="Add to cart"
                  color="#FFF"
                  background="#2A254B"
                  className="product-block__btn"
                  onClick={addToCart}
                />
                <Counter
                  count={count}
                  increase={() => increase()}
                  decrease={() => decrease()}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
