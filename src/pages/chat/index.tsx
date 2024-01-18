import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import SellerChat from './SellerChat';
import { Header } from '../../component/common/Header';
import ProductInfo from './ProductInfo';
import axios from 'axios';
import { ProductData } from './Chat.page';

const productData: ProductData = {
	image: '/assets/images/reserveRoom.svg',
	accommodationName: '에코그린 리조트 호텔 (디럭스 더블)',
	roomName: '(디럭스 더블)',
	price: 170000,
	checkInOut: '2024년 01월 28일~29일',
	productStatus: '판매중',
};

const ChatPage = () => {
	const [user, setUser] = useState(false);

	interface Test {
		chatRoomId: number;
		senderType: string;
		userId: number;
		content: string;
	}

	// useEffect(() => {
	// 	const fetchChatData = async (data: Test) => {
	// 		try {
	// 			const response = await axios.post(
	// 				'https://golden-ticket.site/chats/test',
	// 				data,
	// 			);
	// 			console.log(response.data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	fetchChatData({
	// 		chatRoomId: 3,
	// 		senderType: 'SYSTEM',
	// 		userId: 1,
	// 		content: '입장하셨습니다.',
	// 	});
	// }, []);

	useEffect(() => {
		const fetchChatData = async () => {
			const data = {
				chatRoomId: 3,
				senderType: 'SYSTEM',
				userId: 1,
				content: '입장하셨습니다.',
			};
			try {
				const response = await axios.post(
					'https://golden-ticket.site/chats/test',
					data,
				);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchChatData();
	}, []);

	// 등록된 상품 아이디, 상품 등록 유저(seller) 아이디, 네고 건 유저(purchaser) 아이디 > 채팅방 생성
	// 상품 페이지에서 네고하기 > 채팅방 접근
	// 나의 거래 > 채팅방 접근
	// /chat/:chatId

	// 로그인한 유저 정보 가져오기 (user)
	// chat/:chatId 로 접근 시 채팅방 메시지 내역 state에 저장 (chat)
	// 메시지 senderId 와 로그인 userId 대조 (message)

	// 상품 정보 채팅방 조회에서 가져오기 (chat)

	// 네고 상품 정보 네고 시작시 가져오기 (nego)

	// 네고 상품 결제 완료 시 상품 정보에서 양도 신청 정보 가져오기 (product)

	return (
		<div className="h-screen relative">
			<div className="h-[160px]">
				<Header title={user ? '강릉여행자' : '홍길동'} />
				<ProductInfo productData={productData} />
			</div>
			<div className="h-[calc(100%-160px)]">
				{user ? <SellerChat /> : <Chat />}
			</div>
		</div>
	);
};

export default ChatPage;
