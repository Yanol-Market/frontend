import React, { useState } from 'react';
import ChatList from './component/ChatList';
import FilterDropdown from './component/FilterDropdown';

const ChatListPage = () => {
	const [chatFilter, setChatFilter] = useState('all');

	const chats = [
		{
			id: 2,
			hotelName: '에코그린 리조트 호텔',
			roomInfo: '디럭스 트윈',
			userId: '강릉여행자',
			lastMessageTime: '5분 전',
			lastMessage: '140,000원에 구매 희망합니다.',
			profileImage: 'profile_a.jpg',
			type: 'sell',
			unread: true,
		},
		{
			id: 3,
			hotelName: '에코그린 리조트 호텔',
			roomInfo: '디럭스 트윈',
			userId: '럭키조이',
			lastMessageTime: '1시간 전',
			lastMessage: '제안주신 네고 가격 140,000원은 판매 불가합니다.',
			profileImage: 'profile_b.jpg',
			type: 'buy',
			unread: false,
		},
		{
			id: 5,
			hotelName: '나인트리 프리미어 호텔',
			roomInfo: '스탠다드 트윈',
			userId: '너는피노키오',
			lastMessageTime: '2달 전',
			lastMessage:
				'판매자 사정으로 양도가 취소되었습니다. 결제는 어쩌구 저쩌구',
			profileImage: 'profile_c.jpg',
			type: 'sell',
			unread: false,
		},
		{
			id: 6,
			hotelName: '골드리버 호텔',
			roomInfo: '프리미엄 트윈',
			userId: 'evergreen1010',
			lastMessageTime: '1년 전',
			lastMessage: '양도가 완료되었습니다!',
			profileImage: 'profile_d.jpg',
			type: 'buy',
			unread: false,
		},
	];

	const filterOptions = [
		{ value: 'all', label: '전체 거래' },
		{ value: 'sell', label: '판매 거래' },
		{ value: 'buy', label: '구매 거래' },
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
