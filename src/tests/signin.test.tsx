import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
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
	test('이메일 및 비밀번호가 올바르게 입력이 되는 지 확인합니다.', () => {
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
		userEvent.type(password, 'password12');

		expect(email).toHaveValue('test@gmail.com');
		expect(password).toHaveValue('password12');
	});
	test('이메일이 잘못 입력 됐을 때 에러 상태 나오는 지 확인 합니다.', async () => {
		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<SignIn />
				</MemoryRouter>
			</QueryClientProvider>,
		);

		const errorEmail = 'error@naver.com';
		const inputEmail = screen.getByPlaceholderText('이메일');

		userEvent.type(inputEmail, errorEmail);

		userEvent.click(screen.getByText('로그인'));

		await waitFor(() => {
			const errorText = screen.getByText('이메일 및 비밀번호를 확인해주세요');
			expect(errorText).toBeInTheDocument();
		});
	});
});
