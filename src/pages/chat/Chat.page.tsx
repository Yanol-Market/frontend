import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import SellerChat from './SellerChat';
import { Header } from '../../component/common/Header';
import ProductInfo from './ProductInfo';
import instance from '../../apis/axios';
import { atom, useRecoilState } from 'recoil';
import {
	buyerIdState,
	messageState,
	offeredPriceState,
	productIdState,
	productPriceState,
	receiverNicknameState,
	sellerIdState,
	userIdState,
	userNameState,
} from '../../recoil/atom';

const ChatPage = () => {
	const [userId, setUserId] = useRecoilState<number>(userIdState);
	const [productData, setProductData] = useState<ProductData | null>(null);
	const [chatList, setChatList] = useState<ChatItemType[] | null>([]);
	const [negoStatus, setNegoStatus] = useState<string>('negotiated');
	const [message, setMessage] = useRecoilState(messageState);
	const [productPrice, setProductPrice] = useRecoilState(productPriceState);
	const [receiverName, setReceiverName] = useRecoilState(receiverNicknameState);
	const [userName, setUserName] = useRecoilState(userNameState);
	const messageSend = (newMessage: messageType | null) => {
		setMessage(newMessage);
	};
	const [productId, setProductId] = useRecoilState(productIdState);
	const [buyerId, setBuyerId] = useRecoilState(buyerIdState);
	const [sellerid, setSellerId] = useRecoilState(sellerIdState);
	const [offeredPrice, setOfferPrice] = useRecoilState(offeredPriceState);

	// 로그인 유저 아이디 가져오기

	useEffect(() => {
		async function getUser() {
			try {
				const response = await instance.get('/users/me');
				setUserId(response.data.data.id);
				console.log('user', response);
			} catch (error) {
				console.error(error);
			}
		}
		getUser();
	}, []);

	// 챗룸 아이디 가져오기

	// 채팅 대화 목록 조회

	useEffect(() => {
		const chatRoomId = 5;

		const fetchChatData = async () => {
			try {
				const response = await instance.get(`/chats/${chatRoomId}`);
				const chatRoomData = response.data.data;
				console.log(chatRoomData);

				const { chatRoomInfoResponse, chatResponseList } = chatRoomData;
				setProductData(chatRoomInfoResponse);
				setChatList(chatResponseList);
				const offerChatData = [...chatResponseList]
					.reverse()
					.find((item) => item.senderType === 'BUYER');

				const offer = offerChatData ? offerChatData.content : null;
				const regex = /[\d,]+ 원/;
				const offerPrice = offer?.match(regex);

				console.log(offerPrice);

				const { receiverNickname, price, productId, buyerId, sellerId } =
					chatRoomInfoResponse;

				setReceiverName(receiverNickname);
				setProductPrice(price);
				setUserName(receiverNickname);
				setProductId(productId);
				setBuyerId(buyerId);
				setSellerId(sellerId);
				setOfferPrice(offerPrice);
			} catch (error) {
				console.error('Error fetching chat data:', error);
			}
		};

		fetchChatData();
	}, []);

	// 메시지 보내기

	// 채팅방 만들기

	// 채팅방으로 넘어갈 때
	// 구매자이면 구매내역 판매자 닉네임
	// 판매자이면 판매내역 구매자 닉네임

	return (
		<div className="h-screen relative">
			<div className="h-[160px]">
				<Header title={userName} />
				<ProductInfo productData={productData} />
			</div>
			<div className="h-[calc(100%-160px)]">
				{userId === buyerId ? (
					<Chat
						productData={productData}
						chatList={chatList}
						setNegoStatus={setNegoStatus}
					/>
				) : (
					<SellerChat
						productData={productData}
						chatList={chatList}
						setNegoStatus={setNegoStatus}
					/>
				)}
			</div>
		</div>
	);
};

export default ChatPage;

export interface ProductData {
	accommodationImage: string;
	accommodationName: string;
	roomName: string;
	checkInDate: string;
	checkOutDate: string;
	checkInTime: string;
	checkOutTime: string;
	price: number;
	productStatus: string;
	checkInOut: string;
	receiverId: string | number;
	receiverNickname: string;
	productId: number;
}

export interface ChatItemType {
	chatId: number;
	content: string;
	createdAt: string;
	senderType: string;
	userId: string | number;
	viewed: boolean;
}

export interface ChatList {
	chatList: ChatItemType[] | null;
}

export interface messageType {
	chatRoomId: number;
	senderType: string;
	userId: string | number;
	content: string;
}

export interface ChatResponse {
	chatId: number;
	content: string;
	createdAt: string;
	senderType: string;
	userId: number;
	viewed: boolean;
}

// 채팅방 만들기

// useEffect(() => {
// 	const makeChatRoom = async () => {
// 		const data = {
// 			userId: 41,
// 			productId: 15,
// 		};
// 		try {
// 			const response = await instance.post('/chats/test/chat-room', data);
// 			console.log(response);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	makeChatRoom();
// }, []);

// useEffect(() => {
// 	const sendMessage = async () => {
// 		const data = {
// 			chatRoomId: 5,
// 			senderType: 'SYSTEM',
// 			userId: 41,
// 			content: '입장하셨습니다.',
// 		};
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
// sendMessage();
// }, []);

// const createChatRoom = async () => {
// 	const data = {
// 		userId: 41,
// 		productId: 15,
// 	};
// 	try {
// 		const response = await axios.post(
// 			'https://golden-ticket.site/chats/test/chat-room',
// 			data,
// 		);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };
