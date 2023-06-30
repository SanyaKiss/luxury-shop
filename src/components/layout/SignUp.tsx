import React from 'react';
import '../../scss/layout/SignUp.scss';
import { Input } from '../UI/Input';

export const SignUp: React.FC = () => {
	return (
		<div className='sign-up'>
			<div className='sign-up__container'>
				<div className='sign-up__content'>
					<h3 className='sign-up__title'>Join the club and get the benefits</h3>
					<p className='sign-up__text'>
						Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
						stores and more
					</p>
					<Input
						text='your@gmail.com'
						color='#000000'
						background='#F9F9F9'
						textButton='Sign up'
						colorButton='#FFFFFF'
						backgroundButton='#2a254b'
						className='sign-up__input'
					/>
				</div>
			</div>
		</div>
	);
};
