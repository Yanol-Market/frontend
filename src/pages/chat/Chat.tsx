import React, { useState } from 'react';
import dayjs from 'dayjs';
import NegoPanel from './NegoPanel';
import ChatItem from './ChatItem';
import { Link } from 'react-router-dom';

const sellerName = '홍길동';

const productData: ProductData = {
	productId: 1,
	image: '/assets/images/reserveRoom.svg',
	productName: '에코그린 리조트 호텔',
	productCondition: '디럭스 트윈',
	price: '170,000 원',
	checkInOut: '1/28~29 1박 2일',
};

const initialChatList = [
	{
		userId: true,
		id: 1,
		message: `${productData.productName} ${productData.productCondition} ${productData.checkInOut} ${productData.price}에 팝니다. 가격 협의 가능합니다.`,
		timestamp: new Date(),
		messageType: 'user',
	},
];

const Chat = () => {
	const date = dayjs();
	const now = date.format('YYYY.MM.DD');
	const [nego, setNego] = useState(true);
	const [chatList, setChatList] = useState<ChatItemType[]>(initialChatList);
	const [offered, setOffered] = useState(false);

	return (
		<div className="h-[100%] bg-[#fafafa]">
			<div className="text-m text-center pt-[20px]">{now}</div>
			<div className="text-m text-center p-[10px]">
				{sellerName} 님이 입장하셨습니다.
			</div>
			<ChatItem chatList={chatList} />
			{nego ? (
				<NegoPanel
					chatList={chatList}
					setChatList={setChatList}
					setNego={setNego}
					offered={offered}
					setOffered={setOffered}
					productData={productData}
				/>
			) : offered ? (
				<div className="absolute bottom-0 h-[110px] bg-[#fafafa]">
					<Link
						to="/reservation"
						className="w-[335px] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						원래 가격으로 결제하기
					</Link>
				</div>
			) : (
				<div className="absolute bottom-0 h-[110px]">
					<div
						onClick={() => setNego(true)}
						className="absolute w-[335px] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						제시하기
					</div>
				</div>
			)}
		</div>
	);
};

export default Chat;

interface ChatItemType {
	userId: boolean;
	id: number;
	message: string;
	timestamp: Date;
	messageType: string;
}

interface ProductData {
	productId: number;
	image: string;
	productName: string;
	productCondition: string;
	price: string;
	checkInOut: string;
}
