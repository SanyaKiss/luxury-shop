import React, { useState } from "react";
import axios from "axios";
import "../../../scss/UI/Products/ProductBlock.scss";
import { useNavigate, useParams } from "react-router";
import { Loader } from "../Loader";
import { Counter } from "../Counter";
import { Button } from "../Button";
import { useQuery } from "react-query";
import { useCart } from "../../../stores/cart/store";
import { ProductType } from "../../../stores/cart/types";

async function fetchProduct(id: string | undefined) {
  const { data } = await axios.get<ProductType>(
    `https://637374ac348e9472990cef38.mockapi.io/products/${id}`
  );

  return data;
}

export const ProductBlock: React.FC = () => {
  const { id } = useParams();
  const [count, setCount] = useState<number>(1);
  const navigate = useNavigate();
  const addProduct = useCart((state) => state.addProduct);

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<ProductType>(["product", id], () => fetchProduct(id), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log((error as Error).message); // Type assertion
    navigate("/");
  }

  const addToCart = () => {
    addProduct({
      product,
      quantity: count,
    });
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
      {product?.id === id ? (
        <>
          <img src={product?.imgUrl} className="product-block__img" />
          <div className="product-block__content">
            <div className="product-block__container">
              <h2 className="product-block__title">{product?.title}</h2>
              <h3 className="product-block__price">£{product?.price}</h3>
              <p className="product-block__description">
                {product?.description}
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
