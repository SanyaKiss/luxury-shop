import React from 'react';
import '../../scss/UI/Feature.scss';
import { FeatureType } from '../../constants';

export const Feature: React.FC<FeatureType> = ({ imgUrl, title, text }) => {
	return (
		<div className='features__item'>
			<div className='item__container'>
				<img src={imgUrl} alt='Icon' className='item__img' />
				<h4 className='item__title'>{title}</h4>
				<p className='item__text'>{text}</p>
			</div>
		</div>
	);
};
