import React, { useState } from 'react';
import dayjs from 'dayjs';
import NegoPanel from './NegoPanel';
import ChatItem from './ChatItem';
import { Link } from 'react-router-dom';
import { ProductData } from './Chat.page';
import { useRecoilValue } from 'recoil';
import {
	chatStatusState,
	productIdState,
	userIdState,
	userNameState,
} from '../../recoil/atom';

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
	const chatStatus = useRecoilValue(chatStatusState);
	const productId = useRecoilValue(productIdState);

	return (
		<div className="h-[100%] bg-[#fafafa] overflow-y-auto scrollbar-hide pb-[110px]">
			<div className="text-m text-center pt-[20px]">{now}</div>
			<div></div>
			{chatList ? <ChatItem chatList={chatList} userId={userId} /> : null}
			{chatStatus !== 'NEGO_PROPOSE' ||
				('PAYMENT_PENDING' &&
					(nego ? (
						<NegoPanel
							setNegoStatus={setNegoStatus}
							setNego={setNego}
							setOffered={setOffered}
						/>
					) : offered ? (
						<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
							<Link
								to="/reservation"
								className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
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
					)))}
			{chatStatus === 'PAYMENT_PENDING' && (
				<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
					<Link
						to={`/reservation/nego/${productId}`}
						className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						결제하기
					</Link>
				</div>
			)}
		</div>
	);
};

export default Chat;

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
