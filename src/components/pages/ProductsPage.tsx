import React from 'react';
import { Filters } from '../UI/Filters';
import { Products } from '../UI/Products/Products';
import { About } from '../layout/About';

export const ProductsPage: React.FC = () => {
	return (
		<>
			<Filters />
			<Products />
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
