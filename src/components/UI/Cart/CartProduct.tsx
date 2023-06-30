import React, { useState } from 'react';
import '../../../scss/UI/Cart/СartProduct.scss';

import { Counter } from '../Counter';
import { useCart } from '../../../stores/cart/store';
import { type CartItem } from '../../../stores/cart/types';

interface CartProductProps {
	item: CartItem;
}

export const CartProduct: React.FC<CartProductProps> = ({ item }) => {
	const removeProduct = useCart((state) => state.removeProduct);
	const increaseCount = useCart((state) => state.increaseCount);
	const decreaseCount = useCart((state) => state.decreaseCount);

	const [count, setCount] = useState<number>(item.quantity);

	const handleRemove = (item: CartItem) => {
		removeProduct(item);
	};

	const increase = (item: CartItem) => {
		setCount(count + 1);
		increaseCount(item);
	};

	const decrease = (item: CartItem) => {
		if (count > 1) {
			setCount(count - 1);
			decreaseCount(item);
		}
	};

	return (
		<div className='cart-product' key={item.product.id}>
			<img
				src='public/images/cart/del.png'
				alt='remove product'
				onClick={() => {
					handleRemove(item);
				}}
				className='cart-product__remove-btn'
			/>
			<div className='cart-product__content content '>
				<div className='cart-product__img'>
					<img src={item.product.imgUrl} alt='' />
				</div>
				<div className='cart-product__title '>{item.product.title}</div>
			</div>
			<div className='cart-product__price price column '>$ {item.product.price}</div>
			<div className='cart-product__quantity quantity column'>
				<Counter
					count={count}
					increase={() => {
						increase(item);
					}}
					decrease={() => {
						decrease(item);
					}}
				/>
			</div>
			<div className='cart-product__unit-price unit-price column'>
				$ {item.quantity * item.product.price}
			</div>
		</div>
	);
};
