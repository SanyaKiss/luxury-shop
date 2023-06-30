import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

export const Default: React.FC = () => {
	const { pathname } = useLocation();

	return (
		<div className='App'>
			<Header cropped={pathname !== '/'} />
			<Outlet />
			<Footer />
		</div>
	);
};
