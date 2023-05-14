import React from 'react';

import About from '../sections/About';
import Heading from '../sections/Heading';
import Features from '../sections/Features';
import SignUp from '../sections/SignUp';

const AboutPage: React.FC = () => {
  return (
    <>
      <Heading
        text="A brand built on the love of craftmanship,
        quality and outstanding customer service"
      />
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
      <About
        title="Our service isn’t just personal, it’s actually
        hyper personally exquisite"
        text="Sustainable interiors is not another home design trend, but a 
        different mindset - pivoting the lifestyle altogether."
        order="reversed"
        imgUrl="/images/about/02.jpg"
        element="button"
      />
      <Features />
      <SignUp />
    </>
  );
};

export default AboutPage;
