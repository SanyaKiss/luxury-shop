import React from 'react';
import '../../../scss/UI/Products/Products.scss';

import { Button } from '../Button';
import { Loader } from '../Loader';
import { Link } from 'react-router-dom';
import { Product } from './Product';
import axios from 'axios';
import { shuffle } from '../../../utils/shuffle';
import { useQuery } from 'react-query';
import { useFilters } from '../../../stores/filters/store';
import { type ProductType } from '../../../stores/cart/types';

interface FetchParams {
	args: string;
	shuffled: boolean | undefined;
}

interface ProductsProps {
	title?: string;
	limit?: number;
	hasButton?: boolean;
	shuffled?: boolean;
	currendProductId?: string;
}

async function fetchProducts(params: FetchParams) {
	const { data } = await axios.get<ProductType[]>(
		`https://637374ac348e9472990cef38.mockapi.io/products${params.args}`
	);

	if (params.shuffled) return shuffle([...data]);
	else return data;
}

export const Products: React.FC<ProductsProps> = (props) => {
	const { title, hasButton, shuffled, limit, currendProductId } = props;
	const searchValue = useFilters((state) => state.searchValue);
	const category = useFilters((state) => state.category);
	const sortingType = useFilters((state) => state.sortingType);

	const queryParams = React.useMemo(() => {
		const categoryParam = category !== 'All' ? `category=${category.toLowerCase()}` : '';
		const sortingParam = sortingType ? `sortBy=${sortingType.toLowerCase()}` : '';
		const args = `?${categoryParam}&${sortingParam}&title=${searchValue}`;

		return {
			args,
			shuffled,
		};
	}, [searchValue, category, sortingType, shuffled]);

	const {
		data: items,
		isLoading,
		isError,
		error,
	} = useQuery<ProductType[]>(
		['products', queryParams],
		async () => await fetchProducts(queryParams),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: false,
		}
	);

	if (isLoading) {
		return <Loader />;
	}
	if (isError) {
		console.log((error as Error).message);
	}

	let productsCount = 0;

	const productsItem = items?.map((product: ProductType, index: number) => {
		if (currendProductId === product.id) return false;
		if (limit && productsCount >= limit) return false;

		productsCount++;

		return <Product key={product.id} {...product} />;
	});

	return (
		<div className='products'>
			{title && <h2 className='products__title'>{title}</h2>}
			{isLoading ? (
				<Loader />
			) : isError ? (
				<div className='loader'>Some error occured while loading.</div>
			) : (
				<div className='products__items'>{productsItem}</div>
			)}
			{hasButton && (
				<Link to='/products' className='products__link'>
					<Button
						text='View collection'
						color='#2A254B'
						background='#F9F9F9'
						className='products__button'
					/>
				</Link>
			)}
		</div>
	);
};
