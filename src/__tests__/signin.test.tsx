import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SignIn } from '../pages/signIn';

describe('로그인 테스트', () => {
	test('렌더링 테스트', () => {
		render(<SignIn />);

		const loginTextEl = screen.getAllByText('로그인');

		expect(loginTextEl.length).toBeGreaterThan(0);

		loginTextEl.forEach((el) => {
			expect(el).toBeInTheDocument();
		});
	});
});
