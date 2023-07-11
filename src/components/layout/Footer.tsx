import React from 'react';
import '../../scss/layout/Footer.scss';

import { Input } from '../UI/Input';
import { categories, menu, info, footerIcons } from '../../constants';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

export const Footer: React.FC = () => {
	const { user } = useAuth();
	return (
		<footer className='footer'>
			<div className='footer__top'>
				<div className='footer__content'>
					<ul className='footer__menu'>
						<li className='menu__title'>Menu</li>
						{menu.map((item, index) => (
							<li key={index} className='item'>
								{item}
							</li>
						))}
					</ul>
					<ul className='footer__categories'>
						<li className='categories__title'>Categories</li>
						{categories.map((item, index) => {
							if (item !== 'All') {
								return (
									<Link to='/products' key={index} className='item'>
										{item}
									</Link>
								);
							}
							return null;
						})}
					</ul>
					<ul className='footer__info'>
						<li className='info__title'>Our company</li>
						{info.map((item, index) => (
							<li key={index} className='item'>
								{item}
							</li>
						))}
					</ul>
				</div>
				{user == null && (
					<div className='footer__form'>
						<p className='form__title'>Join our mailing list</p>
						<Input
							text='your@email.com'
							color='#FFFFFF'
							background='rgba(255, 255, 255, 0.15)'
							textButton='Sign up'
							colorButton='#2a254b'
							backgroundButton='#FFFFFF'
							className='form__input'
						/>
					</div>
				)}{' '}
			</div>
			<div className='footer__bottom'>
				<span className='footer__copyright'>Copyright 2022 Luxury LTD</span>
				<div className='footer__links'>
					{footerIcons.map((icon, index) => (
						<a
							target='_blank'
							key={index}
							href='https://www.youtube.com/watch?v=PaEkgV1JOB4'
							rel='noreferrer'
						>
							<img key={index} src={icon} alt='Link' className='footer__link' />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};
