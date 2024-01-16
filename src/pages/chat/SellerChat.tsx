import React, { useState } from 'react';
import dayjs from 'dayjs';
import ChatItem from './ChatItem';
import NegoNoti from './NegoNoti';

const purchaserName = '강릉여행자';

const productData: ProductData = {
	image: '/assets/images/reserveRoom.svg',
	productName: '에코그린 리조트 호텔',
	productCondition: '디럭스 트윈',
	price: '170,000원',
	checkInOut: '1/28~29 1박 2일',
};

const SellerChat = () => {
	const initialChatList = [
		{
			userId: false,
			id: 1,
			message: `${productData.productName} ${productData.productCondition} ${productData.checkInOut} ${productData.price}에 팝니다. 가격 협의 가능합니다.`,
			timestamp: new Date(),
			messageType: 'user',
		},
		{
			userId: true,
			id: 2,
			message: '165,000원에 구매 가능할까요?',
			timestamp: new Date(),
			messageType: 'user',
		},
	];

	const date = dayjs();
	const now = date.format('YYYY.MM.DD');

	const [noti, setNoti] = useState(true);
	const [negoPrice, setNegoPrice] = useState(165000);
	const [negoConsent, setNegoConsent] = useState(false);
	const [chatList, setChatList] = useState<ChatItemType[]>(initialChatList);
	const [reject, setReject] = useState(false);
	const [_, setLimitTime] = useState('');

	const addTwentyMinutes = () => {
		const now = new Date();
		now.setMinutes(now.getMinutes() + 20);
		return dayjs(now).format('HH:mm');
	};

	const consent = () => {
		const newLimitTime = addTwentyMinutes();
		console.log(addTwentyMinutes());

		setLimitTime(newLimitTime);
		setChatList([
			...chatList,
			{
				userId: false,
				id: 3,
				message: '네. 가격을 수정했으니 결제 부탁드려요.',
				timestamp: new Date(),
				messageType: 'user',
			},
			{
				userId: false,
				id: 4,
				message: `판매가가 ${purchaserName}님만을 위해 변경되었습니다.
				 구매자가 20분 이내 결제시 거래가 완료됩니다.`,
				timestamp: new Date(),
				messageType: 'system',
			},
			{
				userId: true,
				id: 5,
				message: `판매자가 판매가격을 수정했습니다. ${newLimitTime} 까지 결제를 완료해주세요.`,
				timestamp: new Date(),
				messageType: 'system',
			},
		]);
		setNegoConsent(true);
		setNoti(false);
	};

	const handleReject = () => {
		setChatList([
			...chatList,
			{
				userId: false,
				id: 6,
				message: `제안주신 네고 가격 ${negoPrice.toLocaleString(
					'ko-KR',
				)}원은 판매 불가합니다.`,
				timestamp: new Date(),
				messageType: 'user',
			},
		]);
		setNoti(false);
		setReject(true);
	};

	return (
		<div className="h-[100%] bg-[#fafafa]">
			<div className="text-m text-center pt-[20px]">{now}</div>
			<div className="text-m text-center p-[10px]">
				{purchaserName} 님이 입장하셨습니다.
			</div>
			<ChatItem chatList={chatList} />
			<div>
				{noti ? (
					<NegoNoti
						purchaserName={purchaserName}
						negoPrice={negoPrice}
						setNoti={setNoti}
						consent={consent}
						handleReject={handleReject}
					/>
				) : negoConsent || reject ? null : (
					<div className="w-[375px] flex justify-between absolute bottom-0 h-[110px]">
						<div
							onClick={handleReject}
							className="w-[160px] bottom-[25px] text-[#828282] text-lg cursor-pointer ml-[20px] h-[42px] bg-[#e5e5e5] rounded-[12px] flex items-center justify-center"
						>
							거절하기
						</div>
						<div
							onClick={consent}
							className="w-[160px] bottom-[25px] text-lg cursor-pointer mr-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
						>
							승인하기
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SellerChat;

interface ChatItemType {
	userId: boolean;
	id: number;
	message: string;
	timestamp: Date;
	messageType: string;
}

interface ProductData {
	image: string;
	productName: string;
	productCondition: string;
	price: string;
	checkInOut: string;
}
