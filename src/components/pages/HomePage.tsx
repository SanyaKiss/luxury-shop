import React from 'react';
import { Products } from '../UI/Products/Products';
import { About } from '../layout/About';
import { Features } from '../layout/Features';
import { Hero } from '../layout/Hero';
import { SignUp } from '../layout/SignUp';
import { useAuth } from '../../context/AuthProvider';

export const HomePage: React.FC = () => {
	const { user } = useAuth();

	return (
		<>
			<Hero />
			<Features />
			<Products title='New Arrivals' limit={4} shuffled={true} hasButton={true} />
			{user == null && <SignUp />}
			<About
				title='From a studio in London to a global brand with over 400 outlets'
				text='When we started Luxury, the idea was simple. Make high quality
            furniture affordable and available for the mass market.'
				extraText='Handmade, and lovingly crafted furniture and homeware is what we
        live, breathe and design so our Chelsea boutique become the hotbed
        for the London interior design community.'
				order='default'
				imgUrl='images/about/01.jpg'
				element='button'
			/>
		</>
	);
};
