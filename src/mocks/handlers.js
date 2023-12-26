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
];
