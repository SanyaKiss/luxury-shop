import React from "react";

import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Products from "../sections/Products";
import SignUp from "../sections/SignUp";
import About from "../sections/About";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Products
        title="New Arrivals"
        limit={4}
        shuffled={true}
        hasButton={true}
      />
      <SignUp />
      <About
        title="From a studio in London to a global brand with over 400 outlets"
        text="When we started Luxury, the idea was simple. Make high quality
            furniture affordable and available for the mass market."
        extraText="Handmade, and lovingly crafted furniture and homeware is what we
        live, breathe and design so our Chelsea boutique become the hotbed
        for the London interior design community."
        order="default"
        imgUrl="/images/about/01.jpg"
        element="button"
      />
    </>
  );
};

export default HomePage;
