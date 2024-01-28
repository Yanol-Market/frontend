import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import instance from '../apis/axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ChatPage from '../pages/chat/Chat.page';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('../apis/axios');

const queryClient = new QueryClient();

const mockedInstance = instance as jest.Mocked<typeof instance>;

const chatId = 123;

const mockChatData = {
	chatResponseList: [
		{
			chatId: 833,
			content: 'sj님이 입장하셨습니다.',
			createdAt: '2024-01-26T12:54:46',
			senderType: 'SYSTEM',
			userId: 83,
			viewed: true,
		},
		{
			chatId: 834,
			content: 'qq님이 입장하셨습니다.',
			createdAt: '2024-01-26T12:54:46',
			senderType: 'SYSTEM',
			userId: 75,
			viewed: true,
		},
	],
	chatRoomInfoResponse: {
		accommodationImage:
			'https://yaimg.yanolja.com/v5/2020/08/14/17/640/5f36467b580d12.71986959.jpg',
		accommodationName: '삼성 라엠 (LaM)',
		buyerId: 83,
		chatRoomId: 123,
		chatStatus: '',
		checkInDate: '2024-01-30',
		checkInTime: '17:00:00',
		checkOutDate: '2024-01-30',
		checkOutTime: '23:00:00',
		negoAvailable: true,
		negoId: -1,
		price: 200,
		productId: 91,
		productStatus: 'SELLING',
		receiverId: 75,
		receiverNickname: 'qq',
		receiverProfileImage: null,
		roomName: '스탠다드 - Standard',
		sellerId: 75,
	},
};

describe('ChatPage Component', () => {
	beforeEach(() => {
		mockedInstance.get.mockResolvedValue({ data: { data: mockChatData } });
	});

	afterEach(() => {
		mockedInstance.get.mockClear();
	});

	it('fetches chat data and updates state correctly', async () => {
		render(
			<React.StrictMode>
				<QueryClientProvider client={queryClient}>
					<RecoilRoot>
						<MemoryRouter initialEntries={[`/chat?chatId=${chatId}`]}>
							<Routes>
								<Route path="/chat" element={<ChatPage />} />
							</Routes>
						</MemoryRouter>
					</RecoilRoot>
				</QueryClientProvider>
			</React.StrictMode>,
		);

		await waitFor(() => {
			expect(instance.get).toHaveBeenCalledWith(`/chats/${chatId}`);
		});

		await waitFor(() => {
			expect(
				screen.getByText('삼성 라엠 (LaM) 스탠다드 - Sta'),
			).toBeInTheDocument();
		});
	});
});
