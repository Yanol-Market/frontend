import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SignIn } from '../pages/signIn';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('로그인 테스트', () => {
	test('렌더링 테스트', () => {
		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<SignIn />
				</MemoryRouter>
			</QueryClientProvider>,
		);

		const loginTextEl = screen.getAllByText('로그인');

		expect(loginTextEl.length).toBeGreaterThan(0);

		loginTextEl.forEach((el) => {
			expect(el).toBeInTheDocument();
		});
	});
	test('아이디 및 비밀번호가 올바르게 입력이 되는 지 확인합니다.', () => {
		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<SignIn />
				</MemoryRouter>
			</QueryClientProvider>,
		);
		const email = screen.getByPlaceholderText('이메일');
		const password = screen.getByPlaceholderText('비밀번호');
		userEvent.type(email, 'test@gmail.com');
		userEvent.type(password, 'password123');

		expect(email).toHaveValue('test@gmail.com');
		expect(password).toHaveValue('password123');
	});
});
