import React from 'react';
import { render, screen } from '@testing-library/react';
import { SignIn } from '../pages/signIn';
describe('로그인 테스트', () => {
	test('렌더링 테스트', () => {
		// expect(1).toBe(1);
		const { debug } = render(<SignIn />);
		debug();

		// const loginTextEl = screen.getAllByAltText('로그인');
		// expect(loginTextEl).toBeInTheDocument();
	});
});
