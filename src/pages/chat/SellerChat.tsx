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
	chatRoomIdState,
	chatStatusState,
	negoIdState,
	negoSuccessState as negoSuccessAtom,
	offeredPriceState,
	productIdState,
	productStatusState,
	receiverNicknameState,
	sellerIdState,
	sendMessage,
	userIdState,
} from '../../recoil/atom';
import TransferNoti from './TransferNoti';
import { useNavigate } from 'react-router-dom';

const SellerChat: React.FC<ChatProps> = ({ chatList }) => {
	const now = dayjs().format('YYYY.MM.DD');

	const [noti, setNoti] = useState(true);
	const [transferNoti, setTransferNoti] = useState(true);

	const [negoConsent, setNegoConsent] = useState(false);
	const [reject, setReject] = useState(false);
	const negoId = useRecoilValue(negoIdState);
	const receiverName = useRecoilValue(receiverNicknameState);
	const buyerId = useRecoilValue(buyerIdState);
	const userId = useRecoilValue(userIdState);
	const chatStatus = useRecoilValue(chatStatusState);
	const chatRoomId = useRecoilValue(chatRoomIdState);
	const offerPrice = useRecoilValue(offeredPriceState);
	const productStatus = useRecoilValue(productStatusState);
	const sellerId = useRecoilValue(sellerIdState);
	const productId = useRecoilValue(productIdState);
	const navigate = useNavigate();

	console.log('productStatus', productStatus);

	const sendConsent = async () => {
		try {
			const response = await instance.patch(`nego/confirm/${negoId}`);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const sendReject = async () => {
		try {
			const response = await instance.patch(`nego/deny/${negoId}`);
			console.log(response.data);
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
				chatRoomId,
				senderType: 'SELLER',
				userId: userId,
				content: '네. 가격을 수정했으니 결제 부탁드려요.',
			};

			const data2 = {
				chatRoomId,
				senderType: 'SYSTEM',
				userId: buyerId,
				content: `판매자가 판매가격을 수정했습니다. ${limitTime}까지 결제를 완료해주세요.`,
			};

			const data3 = {
				chatRoomId,
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
		const sendMessages = async () => {
			const data = {
				chatRoomId,
				senderType: 'SELLER',
				userId,
				content: `제안해주신 네고 가격 ${offerPrice?.toLocaleString()}은 판매 불가합니다.`,
			};

			try {
				const result = await sendMessage(data);
				console.log('메시지 전송 결과:', result);
			} catch (error) {
				console.log(error);
			}
		};

		sendReject();
		sendMessages();
	};

	// transfer

	const sendTransferConsent = async () => {
		try {
			const response = await instance.post(
				`/nego/handoverProduct/${productId}`,
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const transfer = async () => {
		const sendMessages = async () => {
			const data1 = {
				chatRoomId,
				senderType: 'SELLER',
				userId: userId,
				content: '감사합니다. 이용자 명의 변경 완료했습니다.',
			};
			const data2 = {
				chatRoomId,
				senderType: 'SYSTEM',
				userId: userId,
				content: '양도가 완료되었습니다!',
			};
			const data3 = {
				chatRoomId,
				senderType: 'SYSTEM',
				userId: userId,
				content: `영업일 9일 이내 등록한 계좌 정보로 정산 금액이 입금됩니다. 원활한 정산을 위해 '마이 페이지 > 내 계좌' 정보를 다시 한 번 확인해주세요.`,
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

		sendTransferConsent();
		sendMessages();
	};

	// 양도 거절

	const sendTransferReject = async () => {
		try {
			const response = await instance.patch(
				`/nego/denyhandoverProduct/${productId}`,
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const transferReject = async () => {
		const sendMessages = async () => {
			const data1 = {
				chatRoomId,
				senderType: 'SELLER',
				userId: userId,
				content: '죄송합니다. 판매가 어렵습니다.',
			};
			const data2 = {
				chatRoomId,
				senderType: 'SYSTEM',
				userId: userId,
				content:
					'양도가 취소되었습니다. 구매자에게 결제금액이 100% 환불됩니다.',
			};

			try {
				const result1 = await sendMessage(data1);
				console.log('첫 번째 메시지 전송 결과:', result1);

				const result2 = await sendMessage(data2);
				console.log('두 번째 메시지 전송 결과:', result2);
			} catch (error) {
				console.error('메시지 전송 중 오류 발생:', error);
			}
		};

		sendTransferReject();
		sendMessages();
	};

	return (
		<div className="h-[100%] bg-[#fafafa] overflow-y-auto scrollbar-hide pb-[110px]">
			<div className="text-m text-center pt-[20px]">{now}</div>
			<div className="text-m text-center p-[10px]"></div>
			<ChatItem chatList={chatList} userId={userId} />
			<div>
				{userId !== sellerId ? null : (
					<>
						{chatStatus === 'NEGO_PROPOSE' &&
							(noti ? (
								<NegoNoti
									setNoti={setNoti}
									consent={consent}
									handleReject={handleReject}
								/>
							) : (
								!negoConsent &&
								!reject && (
									<div className="w-[430px] bg-[#fafafa] pt-[20px] flex justify-between absolute bottom-0 h-[110px]">
										<div
											onClick={handleReject}
											className="w-[160px] bottom-[25px] text-[#828282] text-lg cursor-pointer ml-[40px] h-[42px] bg-[#e5e5e5] rounded-[12px] flex items-center justify-center"
										>
											거절하기
										</div>
										<div
											onClick={consent}
											className="w-[160px] bottom-[25px] text-lg cursor-pointer mr-[40px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
										>
											승인하기
										</div>
									</div>
								)
							))}
						{chatStatus === 'TRANSFER_PENDING' &&
							(transferNoti ? (
								<TransferNoti
									setTransferNoti={setTransferNoti}
									transfer={transfer}
								/>
							) : (
								<div className="w-[430px] bg-[#fafafa] pt-[20px] flex justify-center absolute bottom-0 h-[110px]">
									<div
										onClick={transfer}
										className="w-[90%] bottom-[25px] text-lg cursor-pointer h-[42px] bg-main rounded-[12px] text-white  flex items-center justify-center"
									>
										양도 신청하기
									</div>
								</div>
							))}
						{chatStatus === 'NEGO_TIMEOUT' && <div></div>}

						{productStatus === 'SOLD_OUT' &&
							chatStatus === 'TRANSFER_COMPLETED' && (
								<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
									<button
										onClick={() => navigate('/sales')}
										className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
									>
										판매내역 확인하기
									</button>
								</div>
							)}
					</>
				)}
			</div>
		</div>
	);
};

export default SellerChat;

export interface ChatList {
	chatList: ChatItemType[] | null;
}
