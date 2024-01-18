import { http, HttpResponse } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import {
	BoughtDetailRes,
	BoughtListRes,
	BuyingRes,
} from '../data/purchasesData';
import {
	ExpiredDetailRes,
	SalesRes,
	SellingDetailRes,
	SellingRes,
	SoldDetailRes,
	SoldRes,
} from '../data/salesData';

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
	http.get('/api/products', () => {
		return HttpResponse.json(products);
	}),
	http.post('/api/signin', async ({ request }) => {
		const userInfo = await request.json();
		const randomAccessToken = uuidv4();
		const randomRefreshToken = uuidv4();
		if (userInfo.email != 'error@naver.com') {
			return HttpResponse.json([
				{
					data: {
						grantType: 'Bearer',
						accessToken: randomAccessToken,
						refreshToken: randomRefreshToken,
						expiresIn: 3600,
					},
					status: 'SUCCESS',
				},
			]);
		} else {
			return HttpResponse.error([
				{
					status: 404,
					message: '로그인 실패',
				},
			]);
		}
	}),
	http.post('/api/signup', async ({ request }) => {
		const userInfo = await request.json();
		const randomId = uuidv4(); // 실제 데이터는 number로 받아오지만 임시로 string 처리
		if (userInfo) {
			return HttpResponse.json([
				{
					data: {
						id: randomId,
						name: userInfo.name,
						email: userInfo.email,
					},
				},
			]);
		}
	}),
	http.post('/api/signout', async ({ request }) => {
		return HttpResponse.json([
			{
				status: 'SUCCESS',
			},
		]);
	}),
	http.get('/api/wishes', async () => {
		return HttpResponse.json([
			{
				productId: 1,
				name: '속초 씨 크루즈 호텔',
				option: '스탠다드 하프 오션뷰 더블룸',
				checkIn: '2022-12-31 23:59:59',
				checkOut: '2022-12-31 23:59:59',
				dDay: 2,
				marketPrice: 240000,
				marketPriceRatio: 34,
				purchasePrice: 213000,
				purchasePriceRatio: 25,
				price: 159000,
			},
			{
				productId: 2,
				name: '블루 하와이아아아 리조트',
				option: '트윈룸 오션뷰',
				checkIn: '2022-12-31 23:59:59',
				checkOut: '2022-12-31 23:59:59',
				dDay: 1,
				marketPrice: 240000,
				marketPriceRatio: 17,
				purchasePrice: 213000,
				purchasePriceRatio: 6,
				price: 200000,
			},
		]);
	}),
	// 구매 내역-구매중-조회 API
	http.get('/api/purchases', () => {
		return HttpResponse.json(BuyingRes);
	}),
	// 구매 내역-구매 완료-리스트-조회 API
	http.get('/api/purchase/history?status=COMPLETE', () => {
		return HttpResponse.json(BoughtListRes);
	}),
	// 구매 내역-구매 완료-상세-조회 API
	http.get('/api/orders/history?status=COMPLETED&productId=1', () => {
		return HttpResponse.json(BoughtDetailRes);
	}),
	// 판매 내역-판매중-조회 API
	http.get('/api/sales', () => {
		return HttpResponse.json(SalesRes);
	}),
	// 판매 완료- 리스트 -조회 API
	http.get('/api/SoldList', () => {
		return HttpResponse.json(SoldRes);
	}),
	// 판매 완료- 상세 -조회 API
	http.get('/api/SoldDetail/1', () => {
		return HttpResponse.json(SoldDetailRes);
	}),
	// 상품만료- 상세 -조회 API
	http.get('/api/ExpiredDetail/1', () => {
		return HttpResponse.json(ExpiredDetailRes);
	}),
];

const products = [
	{
		productId: 1,
		name: '속초 씨 크루즈 호텔',
		option: '스탠다드 하프 오션뷰 더블룸',
		checkIn: '2022-12-31 23:59:59',
		checkOut: '2022-12-31 23:59:59',
		dDay: 2,
		marketPrice: 240000,
		marketPriceRatio: 34,
		purchasePrice: 213000,
		purchasePriceRatio: 25,
		price: 159000,
	},
	{
		productId: 2,
		name: '블루 하와이 리조트',
		option: '트윈룸 오션뷰',
		checkIn: '2022-12-31 23:59:59',
		checkOut: '2022-12-31 23:59:59',
		dDay: 1,
		marketPrice: 240000,
		marketPriceRatio: 17,
		purchasePrice: 213000,
		purchasePriceRatio: 6,
		price: 200000,
	},
	{
		productId: 2,
		name: '블루 하와이 리조트',
		option: '트윈룸 오션뷰',
		checkIn: '2022-12-31 23:59:59',
		checkOut: '2022-12-31 23:59:59',
		dDay: 1,
		marketPrice: 240000,
		marketPriceRatio: 17,
		purchasePrice: 213000,
		purchasePriceRatio: 6,
		price: 200000,
	},
	{
		productId: 2,
		name: '블루 하와이 리조트',
		option: '트윈룸 오션뷰',
		checkIn: '2022-12-31 23:59:59',
		checkOut: '2022-12-31 23:59:59',
		dDay: 1,
		marketPrice: 240000,
		marketPriceRatio: 17,
		purchasePrice: 213000,
		purchasePriceRatio: 6,
		price: 200000,
	},
	{
		productId: 2,
		name: '블루 하와이 리조트',
		option: '트윈룸 오션뷰',
		checkIn: '2022-12-31 23:59:59',
		checkOut: '2022-12-31 23:59:59',
		dDay: 1,
		marketPrice: 240000,
		marketPriceRatio: 17,
		purchasePrice: 213000,
		purchasePriceRatio: 6,
		price: 200000,
	},
];
