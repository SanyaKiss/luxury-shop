import React from 'react'
import './scss/app.scss'
import { useLocation } from 'react-router'
import AppRouter from './router/AppRouter'

export const App: React.FC = () => {
	const { pathname } = useLocation()

	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<>
			<AppRouter />
		</>
	)
}
