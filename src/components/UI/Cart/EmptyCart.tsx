import React from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/UI/Cart/EmptyCart.scss';

export const EmptyCart: React.FC = () => {
	return (
		<div className='empty-cart'>
			<div className='empty-cart__content'>
				<h2 className='empty-cart__title'>Whoops!</h2>
				<img
					src='public/images/cart/empty-cart.gif'
					alt='Cart is empty'
					className='empty-cart__img'
				/>
				<h3 className='empty-cart__description'>Your cart is empty!</h3>
				<p className='empty-cart__redirect'>
					You can see products <Link to='/products'>here.</Link>
				</p>
			</div>
		</div>
	);
};
