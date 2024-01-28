import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Selling from '../pages/mypage/component/salesHistory/Selling';
import { SalesRes } from '../data/salesData';

const mock = new MockAdapter(axios);

test('판매중 조회 API 테스트', async () => {
	// 모의 API 응답 설정
	const mockResponse = { data: SalesRes };
	mock.onGet('/products/history/progress').reply(200, mockResponse);

	// 컴포넌트 렌더링
	render(<Selling />);

	// 가상 API 호출을 기다림
	await waitFor(() => {
		// 응답 데이터를 사용하여 테스트 (예: 화면에 데이터가 나타나는지 확인)
		const textElement = screen.getByText(/숙소명1/);
		expect(textElement).toBeInTheDocument();
	});
});
