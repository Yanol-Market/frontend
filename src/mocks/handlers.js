import { http, HttpResponse } from 'msw';

export const handlers = [
	http.get('/api/test', () => {
		return HttpResponse.json([
			{
				id: 1,
				name: '6조 목서버 테스트',
				checked: true,
			},
		]);
	}),
	http.get('/api/test2', () => {
		return HttpResponse.json([
			{
				id: 2,
				name: '6조 목서버 테스트2',
				checked: true,
			},
		]);
	}),
	http.post('/api/login', async ({ request }) => {
		const userInfo = await request.json();

		return HttpResponse.json([
			{
				data: {
					email: userInfo.email,
					password: userInfo.password,
					accessToken: 'myAccessToken',
					refreshToken: 'myRefreshToken',
				},
				status: 201,
			},
		]);
	}),
	http.post('/api/signup', async ({ request }) => {
		const userInfo = await request.json();
		if (userInfo) {
			return HttpResponse.json([
				{
					status: 201,
				},
			]);
		}
	}),
	http.get('/api/products', () => {
		return HttpResponse.json(products);
	}),
];

const products = [
	{
		productId  : 1,
		name  : '속초 씨 크루즈 호텔',
		option  : '스탠다드 하프 오션뷰 더블룸',
		checkIn  :"2022-12-31 23:59:59",
		checkOut  : "2022-12-31 23:59:59",
		dDay : 2,
		marketPrice : 240000,
		marketPriceRatio : 34,
		purchasePrice  : 213000,
		purchasePriceRatio  : 25,
		price  : 159000,
	},
	{
		productId  : 2,
		name  : '블루 하와이 리조트',
		option  : '트윈룸 오션뷰',
		checkIn  :"2022-12-31 23:59:59",
		checkOut  : "2022-12-31 23:59:59",
		dDay : 1,
		marketPrice : 240000,
		marketPriceRatio : 17,
		purchasePrice  : 213000,
		purchasePriceRatio  : 6,
		price  : 200000,
	} 
]