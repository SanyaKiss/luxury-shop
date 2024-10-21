import React from 'react'
import './scss/app.scss'
import { Routes, Route, useLocation } from 'react-router'
import { AboutPage } from './components/pages/AboutPage'
import { Default } from './components/pages/Default'
import { HomePage } from './components/pages/HomePage'
import { ProductsPage } from './components/pages/ProductsPage'
import { CartPage } from './components/pages/CartPage'
import { NotFoundPage } from './components/pages/NotFoundPage'
import { ProductPage } from './components/pages/ProductPage'

export const App: React.FC = () => {
	const { pathname } = useLocation()

	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

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
