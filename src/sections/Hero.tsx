import React from 'react';
import Button from '../components/UI/Button';
import '../scss/sections/Hero.scss';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img
        src="/images/hero/hero.jpg"
        alt="Hero"
        className="hero__bg"
      />
      <div className="hero__block">
        <div className="block__container">
          <h2 className="block__title">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p className="block__description">
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>
          <Link
            to="/products"
            className="block__link"
          >
            <Button
              text="View collection"
              color="#2A254B"
              background="#F9F9F9"
              className="block__button"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
