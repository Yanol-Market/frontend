import React, { useEffect, useState } from 'react';
import ChatList from './component/ChatList';
import FilterDropdown from './component/FilterDropdown';
import { getCookie } from '../../apis/cookie';
import { useNavigate } from 'react-router-dom';

const ChatListPage = () => {
	const [chatFilter, setChatFilter] = useState('all');
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (!accessToken) {
			navigate('/signin');
		}
	}, []);

	const chats = [
		{
			chatRoomId: 2, // o
			receiverNickname: '강릉여행자', // o
			receiverProfileImage: 'profile_a.jpg', // o
			accommodationName: '에코그린 리조트 호텔', // o
			roomName: '디럭스 트윈', // o
			lastMessage: '140,000원에 구매 희망합니다.', // o
			lastMessageCreatedAt: '2024-01-20T18:44:00', // o
			viewed: false, // o

			type: 'seller',
		},
		{
			chatRoomId: 3,
			receiverNickname: '럭키조이',
			receiverProfileImage: 'profile_b.jpg',
			accommodationName: '에코그린 리조트 프리미어 호텔',
			roomName: '디럭스 트윈',
			lastMessage: '제안주신 네고 가격 140,000원은 판매 불가합니다.',
			lastMessageCreatedAt: '2024-01-20T17:49:00',
			viewed: true,

			type: 'buyer',
		},
		{
			chatRoomId: 5,
			receiverNickname: '너는피노키오',
			receiverProfileImage: 'profile_c.jpg',
			accommodationName: '나인트리 프리미어 호텔',
			roomName: '스탠다드 트윈',
			lastMessage:
				'판매자 사정으로 양도가 취소되었습니다. 결제는 어쩌구 저쩌구',
			lastMessageCreatedAt: '2023-11-20T18:49:00',
			viewed: true,

			type: 'seller',
		},
		{
			chatRoomId: 6,
			receiverNickname: 'evergreen1010',
			receiverProfileImage: 'profile_d.jpg',
			accommodationName: '골드리버 호텔',
			roomName: '프리미엄 트윈',
			lastMessage: '양도가 완료되었습니다!',
			lastMessageCreatedAt: '2023-01-20T18:49:00',
			viewed: false,

			type: 'buyer',
		},
		{
			chatRoomId: 9,
			receiverNickname: '윌리윙카',
			receiverProfileImage: 'profile_e.jpg',
			accommodationName: '찰리와 초콜릿 호텔',
			roomName: '디럭스 트윈',
			lastMessage: '양도가 완료되었습니다!',
			lastMessageCreatedAt: '2022-01-20T18:49:00',
			viewed: true,

			type: 'buyer',
		},
	];

	const filterOptions = [
		{ value: 'all', label: '전체 거래' },
		{ value: 'seller', label: '판매 거래' },
		{ value: 'buyer', label: '구매 거래' },
	];

	const filteredChats =
		chatFilter === 'all'
			? chats
			: chats.filter((chat) => chat.type === chatFilter);

	return (
		<div className="p-4">
			<div className=" bg-white left-0 top-0 w-[375px] h-[70px] z-20 m-auto relative">
				<div className="flex pt-[25px]">
					<div className="font-[500] m-auto relative left-[-18px]">
						나의 거래
					</div>
				</div>
			</div>
			<FilterDropdown
				filterOptions={filterOptions}
				selectedFilter={chatFilter}
				onFilterChange={setChatFilter}
			/>
			<div className="mb-[5rem]">
				<ChatList chats={filteredChats} />
			</div>
		</div>
	);
};

export default ChatListPage;
