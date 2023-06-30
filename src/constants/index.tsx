export interface FeatureType {
	imgUrl: string;
	title: string;
	text: string;
}

export const features: FeatureType[] = [
	{
		imgUrl: 'public/images/features/delivery.svg',
		title: 'Next day as standard',
		text: 'Order before 3pm and get your order the next day as standard',
	},
	{
		imgUrl: 'public/images/features/checkmark.svg',
		title: 'Made by true artisans',
		text: 'Handmade crafted goods made with real passion and craftmanship',
	},
	{
		imgUrl: 'public/images/features/purchase.svg',
		title: 'Unbeatable prices',
		text: 'For our materials and quality you won’t find better prices anywhere',
	},
	{
		imgUrl: 'public/images/features/sprout.svg',
		title: 'Recycled packaging',
		text: 'We use 100% recycled to ensure our footprint is more manageable',
	},
];

export const categories: string[] = [
	'All',
	'Sofas',
	'Chairs',
	'Beds',
	'Wardrobes',
	'Commodes',
	'Accessories',
];

export const footerIcons: string[] = [
	'images/footer/linkedin.svg',
	'images/footer/facebook.svg',
	'images/footer/instagram.svg',
	'images/footer/skype.svg',
	'images/footer/twitter.svg',
	'images/footer/pinterest.svg',
];

export const menu: string[] = [
	'New arrivals',
	'Best sellers',
	'Recently viewed',
	'Popular this week',
	'All products',
];

export const info: string[] = ['About us', 'Vacancies', 'Contact us', 'Privacy', 'Returns policy'];

const productsBackUp = [
	{
		id: '1',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/205/083/20508328.jpg',
		title: 'Vogshen',
		price: 30,
		category: 'accessories',
		description:
			'Long fibers of combed cotton give the towel strength and softness. A soft terry towel of medium thickness perfectly absorbs moisture.',
	},
	{
		id: '2',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/804/853/80485319.jpg',
		title: 'Bakkabru',
		price: 250,
		category: 'sofas',
		description: 'This sofa easily and quickly turns into a spacious bed.',
	},
	{
		id: '3',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/004/790/00479082.jpg',
		title: 'Pello',
		price: 125,
		category: 'chairs',
		description:
			'The chair has a curved shape and springs slightly, providing comfortable support for the back and neck. Natural colors and natural materials create a feeling of freshness and make the space brighter.',
	},
	{
		id: '4',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/603/697/60369783.jpg',
		title: 'Hemnes',
		price: 300,
		category: 'wardrobes',
		description:
			'Suitable for storing short and long clothes on hangers, as well as folded things. Solid wood is a durable natural material.',
	},
	{
		id: '5',
		imgUrl:
			'https://www.ikea.com/ru/ru/images/products/ekoln-shchetka-dlya-unitaza-sero-zelenyy__0996834_pe822585_s5.jpg?f=s',
		title: 'Dimma',
		price: 20,
		category: 'accessories',
		description:
			'This toilet brush is a real work of art in the world of household goods. Its elegant design is perfectly combined with any style of bathroom, and it is guaranteed to bring sophistication and chic to it.',
	},
	{
		id: '6',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/004/256/00425640.jpg',
		title: 'Freset',
		price: 60,
		category: 'chairs',
		description:
			'Comfort is at the heart of the design solution of this chair — a spacious, slightly curved seat and a rounded backrest are located at an angle that will allow you to sit with maximum comfort.',
	},
	{
		id: '7',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/504/589/50458949.jpg',
		title: 'Idanes',
		price: 420,
		category: 'beds',
		description:
			'The soft sloping headboard of the bed will provide optimal support for your back during a leisurely morning cup of coffee or evening reading of your favorite book.',
	},
	{
		id: '8',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/904/588/90458834.jpg',
		title: 'Pakku',
		price: 390,
		category: 'wardrobes',
		description:
			'Folding doors help to save space without requiring space when opening. Removable shelves allow you to adjust the interior space according to storage needs.',
	},
	{
		id: '9',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/904/115/90411554.jpg',
		title: 'Friheten',
		price: 260,
		category: 'sofas',
		description:
			'The sofa can be easily and quickly unfolded without damaging the floor or crumpling the carpet. Large practical storage compartment under the seat.',
	},
	{
		id: '10',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/304/853/30485388.jpg',
		title: 'Grunnarp',
		price: 370,
		category: 'sofas',
		description:
			'Easily turns into a double bed. In the spacious compartment under the seat, it is convenient to store, for example, bed linen.',
	},
	{
		id: '11',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/904/241/90424127.jpg',
		title: 'Vedbu',
		price: 130,
		category: 'chairs',
		description: 'Thanks to the elegant design, the chair will harmoniously fit into any interior.',
	},
	{
		id: '12',
		imgUrl: 'https://images.dostavkin.su/uploads/images/large/303/686/30368619.jpg',
		title: 'Tissedal',
		price: 100,
		category: 'commodes',
		description:
			'Thanks to the integrated door closer, the drawer closes smoothly, softly and noiselessly. Adjustable legs allow you to correct the irregularities of the floor.',
	},
];
