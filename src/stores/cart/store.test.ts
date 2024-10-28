import { act, renderHook } from '@testing-library/react'
import { useCart } from './store'
import { expect } from '@jest/globals'

const initializeCart = () => {
	act(() => {
		useCart.setState({
			cart: [],
			totalPrice: 0,
		})
	})
}

const createTestItem = (id = '1', price = 100) => ({
	product: {
		id,
		imgUrl: '',
		title: 'Test Product',
		price,
		description: '',
	},
	quantity: 1,
})

beforeEach(initializeCart)

describe('store test', () => {
	test('add item in cart', async () => {
		const { result } = renderHook(() => useCart())
		const item = createTestItem()

		expect(result.current.cart).toHaveLength(0)
		expect(result.current.totalPrice).toBe(0)

		act(() => {
			result.current.addProduct(item)
		})

		expect(result.current.cart).toHaveLength(1)
		expect(result.current.cart[0].quantity).toBe(1)
		expect(result.current.totalPrice).toBe(item.product.price)
	})

	test('remove item in cart', async () => {
		const { result } = renderHook(() => useCart())
		const item = createTestItem()

		act(() => {
			result.current.addProduct(item)
		})

		act(() => {
			result.current.removeProduct(item)
		})

		expect(result.current.cart).toHaveLength(0)
		expect(result.current.totalPrice).toBe(0)
	})

	test('increment item quantity and update total price', async () => {
		const { result } = renderHook(() => useCart())
		const item = createTestItem()

		act(() => {
			result.current.addProduct(item)
		})

		act(() => {
			result.current.increaseCount(item)
		})

		expect(result.current.cart[0].quantity).toBe(2)
		expect(result.current.totalPrice).toBe(item.product.price * 2)
	})

	test('decrement item quantity from 1', async () => {
		const { result } = renderHook(() => useCart())
		const item = createTestItem()

		act(() => {
			result.current.addProduct(item)
		})

		act(() => {
			result.current.decreaseCount(item)
		})

		expect(result.current.cart[0].quantity).toBe(1)
		expect(result.current.totalPrice).toBe(item.product.price)
	})

	test('decrement item quantity after increment', async () => {
		const { result } = renderHook(() => useCart())
		const item = createTestItem()

		act(() => {
			result.current.addProduct(item)
		})

		act(() => {
			result.current.increaseCount(item)
		})

		act(() => {
			result.current.decreaseCount(item)
		})

		expect(result.current.cart[0].quantity).toBe(1)
		expect(result.current.totalPrice).toBe(item.product.price)
	})

	test('clear cart', async () => {
		const { result } = renderHook(() => useCart())
		const item = createTestItem()

		act(() => {
			result.current.addProduct(item)
			result.current.addProduct(item)
		})

		act(() => {
			result.current.clearCart()
		})

		expect(result.current.cart).toHaveLength(0)
		expect(result.current.totalPrice).toBe(0)
	})

	test('clear empty cart', async () => {
		const { result } = renderHook(() => useCart())

		act(() => {
			result.current.clearCart()
		})

		expect(result.current.cart).toHaveLength(0)
		expect(result.current.totalPrice).toBe(0)
	})
})
