import React from 'react';
import { useParams } from 'react-router';

import Features from '../sections/Features';
import ProductBlock from '../sections/ProductBlock';
import Products from '../sections/Products';
import SignUp from '../sections/SignUp';

const ProductPage: React.FC = () => {
  const { id } = useParams();

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

export default ProductPage;
