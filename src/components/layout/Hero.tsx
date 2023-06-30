import React from 'react';
import '../../scss/layout/Hero.scss';

import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
	return (
		<section className='hero'>
			<img src='public/images/hero/hero.jpg' alt='Hero' className='hero__bg' />
			<div className='hero__block'>
				<div className='block__container'>
					<h2 className='block__title'>
						Luxury homeware for people who love timeless design quality
					</h2>
					<p className='block__description'>
						With our new collection, view over 400 bespoke pieces from homeware through to furniture
						today
					</p>
					<Link to='/products' className='block__link'>
						<Button
							text='View collection'
							color='#2A254B'
							background='#F9F9F9'
							className='block__button'
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};
