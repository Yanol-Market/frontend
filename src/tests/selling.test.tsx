import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Selling from '../pages/mypage/component/salesHistory/Selling';
import { SalesRes } from '../data/salesData';

const mock = new MockAdapter(axios);

test('판매중 조회 렌더링 테스트', async () => {
	// 모의 API 응답 설정
	const mockResponse = { data: SalesRes };
	mock.onGet('/api/purchase-history').reply(200, mockResponse);

	render(<Selling />);

	await waitFor(() => {
		const textElement = screen.getByText(/숙소명1/);
		expect(textElement).toBeInTheDocument();
	});
});

test('판매중 조회 API 호출 테스트', async () => {
	const mockResponse = { data: SalesRes };
	mock.onGet('/api/purchase-history').reply(200, mockResponse);

	const response = await axios.get('/api/purchase-history');
	expect(response.status).toEqual(200);
	expect(response.data).toEqual(mockResponse);
});
