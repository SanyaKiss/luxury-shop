import React from "react";
import { Filters } from "../UI/Filters";
import { Products } from "../UI/Products/Products";
import { About } from "../layout/About";

export const ProductsPage: React.FC = () => {
  return (
    <>
      <Filters />
      <Products />
      <About
        title="Join the club and get the benefits"
        text="Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more"
        order="reversed"
        imgUrl="/about/02.jpg"
        element="input"
      />
    </>
  );
};
