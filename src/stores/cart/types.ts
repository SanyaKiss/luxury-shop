export type ProductType = {
	id: string;
	imgUrl: string;
	title: string;
	price: number;
	description: string;
};

export type CartItem = {
	product: ProductType;
	quantity: number;
};

export type Store = {
	cart: CartItem[];
	totalPrice: number;
	addProduct: (item: CartItem) => void;
	removeProduct: (item: CartItem) => void;
	increaseCount: (item: CartItem) => void;
	decreaseCount: (item: CartItem) => void;
	clearCart: () => void;
}