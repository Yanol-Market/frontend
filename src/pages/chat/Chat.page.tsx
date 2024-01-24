import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import SellerChat from './SellerChat';
import { Header } from '../../component/common/Header';
import ProductInfo from './ProductInfo';
import instance from '../../apis/axios';
import { useRecoilState } from 'recoil';
import {
	buyerIdState,
	chatRoomIdState,
	chatStatusState,
	messageState,
	negoIdState,
	offeredPriceState,
	productIdState,
	productPriceState,
	productStatusState,
	receiverNicknameState,
	sellerIdState,
	sendMessage,
	userIdState,
	userNameState,
} from '../../recoil/atom';
import { useLocation } from 'react-router-dom';

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
	const [sellerId, setSellerId] = useRecoilState(sellerIdState);
	const [offeredPrice, setOfferPrice] = useRecoilState(offeredPriceState);
	const [chatStatus, setChatStatus] = useRecoilState(chatStatusState);
	const [chatRoomId, setChatRoomId] = useRecoilState(chatRoomIdState);
	const [negoId, setNegoId] = useRecoilState(negoIdState);
	const [productStatus, setProductStatus] = useRecoilState(productStatusState);

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const chatId = searchParams.get('chatId');

	// 로그인 유저 아이디 가져오기

	useEffect(() => {
		async function getUser() {
			try {
				const response = await instance.get('/users/me');
				setUserId(response.data.data.id);
				console.log('user', response.data.data.id);
			} catch (error) {
				console.error(error);
			}
		}
		getUser();
	}, []);

	// 채팅방 만들기
	// useEffect(() => {
	// 	const makeChatRoom = async () => {
	// 		const data = {
	// 			userId: 7,
	// 			productId: 1,
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

	// 챗룸 아이디 가져오기

	// useEffect(() => {
	// 	const makeChatRoom = async () => {
	// 		const data = {
	// 			userId: 7,
	// 			productId: 2,
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

	// 채팅 대화 목록 조회

	useEffect(() => {
		const fetchChatData = async () => {
			try {
				const response = await instance.get(`/chats/${chatId}`);
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

				const {
					receiverNickname,
					price,
					productId,
					buyerId,
					sellerId,
					chatRoomId,
					chatStatus,
					negoId,
					productStatus,
				} = chatRoomInfoResponse;

				setReceiverName(receiverNickname);
				setProductPrice(price);
				setUserName(receiverNickname);
				setProductId(productId);
				setBuyerId(buyerId);
				setSellerId(sellerId);
				setOfferPrice(offerPrice);
				setChatStatus(chatStatus);
				setChatRoomId(chatRoomId);
				setNegoId(negoId);
				setProductStatus(productStatus);
			} catch (error) {
				console.error('Error fetching chat data:', error);
			}
		};

		fetchChatData();
	}, []);

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
// const createChatRoom = async () => {
// 	const data = {
// 		userId: 7,
// 		productId: 2,
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
