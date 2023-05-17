import React from "react";
import { useParams } from "react-router";
import { ProductBlock } from "../UI/Products/ProductBlock";
import { Products } from "../UI/Products/Products";
import { Features } from "../layout/Features";
import { SignUp } from "../layout/SignUp";

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  console.log("product page");
  return (
    <>
      <ProductBlock />
      <Products
        title="You might also like"
        limit={4}
        shuffled={true}
        currendProductId={id}
      />
      <Features />
      <SignUp />
    </>
  );
};
