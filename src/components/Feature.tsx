import React from 'react';
import '../scss/components/Feature.scss';
import { Feature } from '../constants';

const Feature: React.FC<Feature> = ({ imgUrl, title, text }) => {
  return (
    <div className="features__item">
      <div className="item__container">
        <img
          src={imgUrl}
          alt="Icon"
          className="item__img"
        />
        <h4 className="item__title">{title}</h4>
        <p className="item__text">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
