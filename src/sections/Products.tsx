import React from "react";
import "../scss/sections/Products.scss";

import Product from "../components/Product";
import Button from "../components/UI/Button";
import Loader from "../components/UI/Loader";

import { useSelector } from "react-redux";
import { fetchProducts } from "../store/products/slice";
import { selectProducts } from "../store/products/selectors";
import { useAppDispatch } from "../store/store";
import { Link, useParams } from "react-router-dom";
import { selectFilters } from "../store/filters/selectors";

type ProductsProps = {
  title?: string;
  limit?: number;
  hasButton?: boolean;
  shuffled?: boolean;
  currendProductId?: string;
};

const Products: React.FC<ProductsProps> = ({
  title,
  hasButton,
  shuffled,
  limit,
  currendProductId,
}) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectProducts);
  const { searchValue, category, sortingType } = useSelector(selectFilters);
  const { id } = useParams();
  let productsCount = 0;

  React.useEffect(() => {
    const categoryParam =
      category !== "All" ? `category=${category.toLowerCase()}` : "";
    const sortingParam = sortingType
      ? `sortBy=${sortingType.toLowerCase()}`
      : "";
    const params = {
      args: `?${categoryParam}&${sortingParam}&title=${searchValue}`,
      shuffled,
    };

    dispatch(fetchProducts(params));
  }, [searchValue, category, sortingType, id]);

  const productsItem = items.map((product: Product, index: number) => {
    if (currendProductId === product.id) return false;
    if (limit && productsCount >= limit) return false;

    productsCount++;

    return <Product key={product.id} {...product} />;
  });

  return (
    <div className="products">
      {title && <h2 className="products__title">{title}</h2>}
      {status === "loading" ? (
        <Loader />
      ) : status === "error" ? (
        <div className="loader">Some error occured while loading.</div>
      ) : (
        <div className="products__items">{productsItem}</div>
      )}
      {hasButton && (
        <Link to="/products" className="products__link">
          <Button
            text="View collection"
            color="#2A254B"
            background="#F9F9F9"
            className="products__button"
          />
        </Link>
      )}
    </div>
  );
};

export default Products;
