export interface ProductType {
	id: string
	imgUrl: string
	title: string
	price: number
	description: string
}

export interface CartItem {
	product: ProductType
	quantity: number
}

export interface Store {
	cart: CartItem[]
	totalPrice: number
	addProduct: (item: CartItem) => void
	removeProduct: (item: CartItem) => void
	increaseCount: (item: CartItem) => void
	decreaseCount: (item: CartItem) => void
	clearCart: () => void
}
