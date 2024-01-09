import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AfterSignInMyPage from '../pages/mypage/component/SignIn/AfterSignInMyPage';
import MyAccount from '../pages/mypage/component/Account/MyAccount';
import BeforeSignInMyPage from '../pages/mypage/component/SignIn/BeforeSignInMyPage';

describe('마이페이지 테스트', () => {
	test('만약 토큰이 있으면 AfterSignInMyPage 없으면 BeforeSignInMyPage를 보여줍니다.', () => {
		act(() => {
			sessionStorage.setItem('accessToken', 'testAccessToken');
			render(
				<MemoryRouter>
					<AfterSignInMyPage />
				</MemoryRouter>,
			);
		});

		act(() => {
			sessionStorage.removeItem('accessToken');
			render(
				<MemoryRouter>
					<BeforeSignInMyPage />
				</MemoryRouter>,
			);
		});
	});
	test('내 계좌 삭제 버튼 클릭 시 모달창이 잘 열리는 지 확인합니다.', async () => {
		render(
			<MemoryRouter>
				<MyAccount />
			</MemoryRouter>,
		);
		const removeBtn = screen.getByAltText('쓰레기통');
		userEvent.click(removeBtn);

		await waitFor(() => {
			const removeModalText = screen.getByText('계좌를 삭제하시겠습니까?');
			expect(removeModalText).toBeInTheDocument();
		});
	});
});
