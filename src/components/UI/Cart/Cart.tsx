import React, { useState } from 'react';
import '../../../scss/UI/Cart/Cart.scss';
import { Button } from '../Button';
import { Input } from '../Input';
import { CartProduct } from './CartProduct';
import { Modal } from './Modal';
import { useCart } from '../../../stores/cart/store';
import { type CartItem } from '../../../stores/cart/types';

export const Cart: React.FC = () => {
	const cart = useCart((state) => state.cart);
	const totalPrice = useCart((state) => state.totalPrice);

	const [isOpen, setIsOpen] = useState(false);

	const toggleDialog = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='cart'>
			<div className='cart-heading'>
				<p className='cart-heading__product content '>PRODUCT</p>
				<p className='cart-heading__price price column'>PRICE</p>
				<p className='cart-heading__quantity quantity  column'>QTY</p>
				<p className='cart-heading__unit-price unit-price  column'>UNIT PRICE</p>
			</div>
			<div className='cart-products'>
				{cart.map((item: CartItem) => (
					<CartProduct item={item} />
				))}
			</div>
			<div className='cart-check'>
				<Input
					text='Voucher code'
					color='#000000'
					background='#F9F9F9'
					textButton='Redeem'
					colorButton='#FFFFFF'
					backgroundButton='#2a254b'
					className='voucher-input'
				/>
				<div className='total'>
					<div className='total__line'>
						<p>Subtotal</p>
						<p>${totalPrice}</p>
					</div>
					<div className='total__line'>
						<p>Shipping fee</p>
						<p>$0</p>
					</div>
					<div className='total__line'>
						<p>Coupon</p>
						<p>No</p>
					</div>
					<div className='total__line'>
						<h2>TOTAL</h2>
						<h2>${totalPrice}</h2>
					</div>
					<Button
						text='Check out'
						color='#2a254b'
						background='#f9f9f9'
						className='total__button'
						onClick={toggleDialog}
					/>
				</div>
			</div>
			<Modal isOpen={isOpen} onClose={toggleDialog} />
		</div>
	);
};
