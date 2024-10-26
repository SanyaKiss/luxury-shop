import React from 'react'
import { Routes, Route } from 'react-router'
import { AboutPage } from '../components/pages/AboutPage'
import { CartPage } from '../components/pages/CartPage'
import { Default } from '../components/pages/Default'
import { HomePage } from '../components/pages/HomePage'
import { NotFoundPage } from '../components/pages/NotFoundPage'
import { ProductPage } from '../components/pages/ProductPage'
import { ProductsPage } from '../components/pages/ProductsPage'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Default />}>
				<Route index element={<HomePage />} />
				<Route path='products' element={<ProductsPage />} />
				<Route path='products/:category' element={<ProductsPage />} />
				<Route path='product/:id' element={<ProductPage />} />
				<Route path='about' element={<AboutPage />} />
				<Route path='cart' element={<CartPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
