import React, { useState } from 'react';
import dayjs from 'dayjs';
import ChatItem from './ChatItem';
import NegoNoti from './NegoNoti';
import { ChatItemType } from './Chat.page';
import { ChatProps } from './Chat';
import instance from '../../apis/axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
	buyerIdState,
	chatStatusState,
	messageState,
	negoIdState,
	negoSuccessState as negoSuccessAtom,
	receiverNicknameState,
	sendMessage,
	userIdState,
} from '../../recoil/atom';

const SellerChat: React.FC<ChatProps> = ({ productData, chatList }) => {
	const now = dayjs().format('YYYY.MM.DD');

	const [noti, setNoti] = useState(true);
	const [negoConsent, setNegoConsent] = useState(false);
	const [reject, setReject] = useState(false);
	const negoId = useRecoilValue(negoIdState);
	const receiverName = useRecoilValue(receiverNicknameState);
	const [negoSuccess, setNegoSuccess] = useRecoilState<boolean | null>(
		negoSuccessAtom,
	);
	const [message, setMessage] = useRecoilState(messageState);
	const buyerId = useRecoilValue(buyerIdState);
	const userId = useRecoilValue(userIdState);
	const chatStatus = useRecoilValue(chatStatusState);

	const sendConsent = async () => {
		try {
			const response = await instance.patch(`nego/confirm/${negoId}`);
			console.log(response.data);
			if (response.data) {
				setNegoSuccess(response.data.data.consent);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const consent = () => {
		const addTwentyMinutes = () => {
			const now = new Date();
			now.setMinutes(now.getMinutes() + 20);
			return dayjs(now).format('HH:mm');
		};
		const limitTime = addTwentyMinutes();

		const sendMessages = async () => {
			const data1 = {
				chatRoomId: 5,
				senderType: 'SELLER',
				userId: userId,
				content: '네. 가격을 수정했으니 결제 부탁드려요.',
			};

			const data2 = {
				chatRoomId: 5,
				senderType: 'SYSTEM',
				userId: buyerId,
				content: `판매자가 판매가격을 수정했습니다. ${limitTime}까지 결제를 완료해주세요.`,
			};

			const data3 = {
				chatRoomId: 5,
				senderType: 'SYSTEM',
				userId: userId,
				content: `판매가가 ${receiverName}님만을 위해 변경되었습니다. 구매자가 20분 이내 결제시 거래가 완료됩니다.`,
			};

			try {
				const result1 = await sendMessage(data1);
				console.log('첫 번째 메시지 전송 결과:', result1);

				const result2 = await sendMessage(data2);
				console.log('두 번째 메시지 전송 결과:', result2);

				const result3 = await sendMessage(data3);
				console.log('세 번째 메시지 전송 결과:', result3);
			} catch (error) {
				console.error('메시지 전송 중 오류 발생:', error);
			}
		};

		sendConsent();

		sendMessages();
		setNegoConsent(true);
		setNoti(false);
	};

	const handleReject = () => {
		setNoti(false);
		setReject(true);
	};

	return (
		<div className="h-[100%] bg-[#fafafa] overflow-y-auto scrollbar-hide pb-[110px]">
			<div className="text-m text-center pt-[20px]">{now}</div>
			<div className="text-m text-center p-[10px]"></div>
			<ChatItem chatList={chatList} userId={userId} />
			<div>
				{chatStatus !== 'NEGO_PROPOSE' &&
					(noti ? (
						<NegoNoti
							setNoti={setNoti}
							consent={consent}
							handleReject={handleReject}
						/>
					) : (
						!negoConsent &&
						!reject && (
							<div className="w-[430px] bg-white pt-[20px] flex justify-between absolute bottom-0 h-[110px]">
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
						)
					))}
			</div>
		</div>
	);
};

export default SellerChat;

export interface ChatList {
	chatList: ChatItemType[] | null;
}
