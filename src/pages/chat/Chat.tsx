import React, { useState } from 'react';
import dayjs from 'dayjs';
import NegoPanel from './NegoPanel';
import ChatItem from './ChatItem';
import { Link } from 'react-router-dom';
import { ProductData } from './Chat.page';
import { useRecoilValue } from 'recoil';
import { userIdState, userNameState } from '../../recoil/atom';

const Chat: React.FC<ChatProps> = ({
	productData,
	chatList,
	setNegoStatus,
}) => {
	const date = dayjs();
	const now = date.format('YYYY.MM.DD');
	const [nego, setNego] = useState(true);
	const [offered, setOffered] = useState(false);
	const userName = useRecoilValue(userNameState);
	const userId = useRecoilValue(userIdState);

	return (
		<div className="h-[100%] bg-[#fafafa] overflow-y-auto scrollbar-hide pb-[110px]">
			<div className="text-m text-center pt-[20px]">{now}</div>
			<div className="text-m text-center p-[10px]">
				{userName} 님이 입장하셨습니다.
			</div>
			<div></div>
			{chatList ? <ChatItem chatList={chatList} userId={userId} /> : null}
			{nego ? (
				<NegoPanel
					setNegoStatus={setNegoStatus}
					setNego={setNego}
					setOffered={setOffered}
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
				<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
					<div
						onClick={() => setNego(true)}
						className="absolute w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						제시하기
					</div>
				</div>
			)}
		</div>
	);
};

export default Chat;

// const initialChatList = [
// 	{
// 		userId: true,
// 		id: 1,
// 		message: `${productData.productName} ${productData.productCondition} ${productData.checkInOut} ${productData.price}에 팝니다. 가격 협의 가능합니다.`,
// 		timestamp: new Date(),
// 		messageType: 'user',
// 	},
// ];

export interface ChatProps {
	productData: ProductData | null;
	chatList: ChatItemType[] | null;
	setNegoStatus: React.Dispatch<React.SetStateAction<string>>;
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
