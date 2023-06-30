import React from 'react';
import '../../scss/UI/NotFound.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
	return (
		<div className='not-found'>
			<div className='not-found__content'>
				<h2 className='not-found__title'>Whoops!</h2>
				<img src='images/not-found/default.gif' alt='Not found' className='not-found__img' />
				<h3 className='not-found__description'>Looks like this page went on vacation.</h3>
				<p className='not-found__redirect'>
					Try our <Link to='/'>homepage</Link> instead.
				</p>
			</div>
		</div>
	);
};
