import React, { useEffect, useState } from 'react';
import instance from '../../apis/axios';
import { useLocation } from 'react-router-dom';
import ProductInfo from './ProductInfo';

export interface ProductData {
	image: string;
	accommodationName: string;
	roomName: string;
	productStatus: string;
	checkInOut: string;
	price: number;
}

export interface Chat {
	chatId: number;
	senderType: string;
	userId: number;
	content: string;
	viewed: boolean;
	createdAt: string;
}

const ChatPage = () => {
	const [productData, setProductData] = useState<ProductData | null>(null);
	const [chatList, setChatList] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const location = useLocation();

		const getQueryStringValue = (chatRoomId: string) => {
			const queryParams = new URLSearchParams(location.search);
			return queryParams.get(chatRoomId);
		};

		// const chatRoomId = getQueryStringValue('chatRoomId');
		const chatRoomId = 1;

		const fetchChatData = async () => {
			try {
				const response = await instance.get(`/chats/${chatRoomId}`);
				console.log(response.data);
				setProductData(response.data.chatRoomInfoResponse);
				setChatList(response.data.chatResponseList);
			} catch (error) {
				console.error(error);
			}
		};

		fetchChatData();
	}, []);
	return (
		<div>
			<ProductInfo productData={productData} />
		</div>
	);
};

export default ChatPage;
