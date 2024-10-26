import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { useCart } from '../../../stores/cart/store'
import type { CartItem } from '../../../stores/cart/types'

const item: CartItem = {
	product: {
		id: '',
		imgUrl: '',
		title: '',
		price: 0,
		description: '',
	},
	quantity: 1,
}

const originalstate = useCart.getState()

beforeEach(() => {
	useCart.setState(originalstate)
})

test('should increment', async () => {
	const { result } = renderHook(() => useCart())

	render(
		<Counter
			count={1}
			increase={() => {
				result.current.increaseCount(item)
			}}
			decrease={() => {
				result.current.increaseCount(item)
			}}
		/>
	)

	const incBtn = screen.getByTestId('inc-btn')
	fireEvent.click(incBtn)
	// expect(result.current.count).toBe(2)
})
