import React from 'react';
import { Cart } from '../UI/Cart/Cart';
import { EmptyCart } from '../UI/Cart/EmptyCart';
import { useCart } from '../../stores/cart/store';

export const CartPage: React.FC = () => {
	const cart = useCart((state) => state.cart);

	if (cart.length === 0) {
		return <EmptyCart />;
	}

	return (
		<>
			<Cart />
		</>
	);
};
