import React, { useState } from 'react';
import dayjs from 'dayjs';
import NegoPanel from './NegoPanel';
import ChatItem from './ChatItem';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	buyerIdState,
	chatStatusState,
	negoAvailableState,
	negoState,
	paymentsState,
	productDataState,
	productIdState,
	productStatusState,
	userIdState,
} from '../../recoil/atom';
import { getPaymentsDetail } from '../../apis/paymentsDetail';

const Chat: React.FC<ChatProps> = ({ chatList }) => {
	const date = dayjs();
	const now = date.format('YYYY.MM.DD');
	const [nego, setNego] = useRecoilState(negoState);
	const [offered, setOffered] = useState(false);
	const userId = useRecoilValue(userIdState);
	const chatStatus = useRecoilValue(chatStatusState);
	const productId = useRecoilValue(productIdState);
	const [payData, setPayData] = useRecoilState(paymentsState);
	const navigate = useNavigate();
	const productStatus = useRecoilValue(productStatusState);
	const productData = useRecoilValue(productDataState);
	const productName = `${productData?.accommodationName} ${productData?.roomName}`;
	const product = productName.substring(0, 22);
	const startDate = productData?.checkInDate;
	const endDate = productData?.checkOutDate;
	const checkInDate = dayjs(startDate).format('YYYY년 MM월 DD일');
	const checkOutDate = dayjs(endDate).format('DD일');
	const buyerId = useRecoilValue(buyerIdState);
	const negoAvailable = useRecoilValue(negoAvailableState);

	const handleClickPayMentsButton = async (link: string) => {
		try {
			const payData = await getPaymentsDetail(`${productId}`);
			setPayData(payData.data);
			navigate(link);
		} catch (error) {
			throw new Error('결제 상세페이지 이동 실패');
		}
	};

	return (
		<div className="h-[100%] bg-[#fafafa] overflow-y-auto scrollbar-hide pb-[110px]">
			<div className="text-m text-center pt-[20px]">{now}</div>
			{chatList ? <ChatItem chatList={chatList} userId={userId} /> : null}

			{chatStatus === '' &&
				productStatus !== 'RESERVED' &&
				negoAvailable === true &&
				(nego ? (
					<NegoPanel setOffered={setOffered} />
				) : offered ? (
					<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
						<button
							onClick={() => {
								handleClickPayMentsButton(
									`/reservation?productId=${productId}`,
								);
							}}
							className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
						>
							원래 가격으로 결제하기
						</button>
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
				))}

			{chatStatus === 'NEGO_PROPOSE' && (
				<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
					<button
						onClick={() => {
							handleClickPayMentsButton(`/reservation?productId=${productId}`);
						}}
						className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						원래 가격으로 결제하기
					</button>
				</div>
			)}

			{chatStatus === 'NEGO_TIMEOUT' && (
				<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
					<button
						onClick={() => {
							handleClickPayMentsButton(`/reservation?productId=${productId}`);
						}}
						className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						재결제하기
					</button>
				</div>
			)}

			{chatStatus === 'PAYMENT_PENDING' && (
				<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
					<button
						onClick={() => {
							handleClickPayMentsButton(`/reservation?productId=${productId}`);
						}}
						className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						결제하기
					</button>
				</div>
			)}

			{chatStatus === 'PAYMENT_PENDING' ||
				('TRANSFER_PENDING' && buyerId !== userId && (
					<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
						<div className="w-[90%] bottom-[25px] text-lg m-[20px] h-[42px] bg-[#E5E5E5] rounded-[12px] text-white flex items-center justify-center">
							현재 다른 사용자가 예약중인 상품입니다.
						</div>
					</div>
				))}

			{/* {productStatus === 'RESERVED' && chatStatus !== 'PAYMENT_PENDING' && (
				<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
					<div className="w-[90%] bottom-[25px] text-lg m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center">
						상품이 이미 예약중입니다.
					</div>
				</div>
			)} */}

			{productStatus === 'RESERVED' &&
				chatStatus === 'TRANSFER_PENDING' &&
				buyerId === userId && <div></div>}

			{productStatus === 'SOLD_OUT' && chatStatus === 'TRANSFER_COMPLETED' && (
				<>
					<div>
						<div className="flex items-center flex-col m-[10px]">
							<div className="bg-[#f0f0f0] items-center rounded-[12px] h-[95px] w-[90%] p-[5px]">
								<p className="text-sm ml-[10px]">
									골든티켓 등록번호 {productId}
								</p>
								<div className="flex">
									<img
										src={productData.accommodationImage}
										className="h-[56px] w-[56px] rounded-[12px] m-[5px]"
										alt=""
									/>
									<div className="p-[5px]">
										<p className="text-lg mb-[2px]">{product}</p>
										<p className="text-m mb-[2px]">
											{checkInDate}~{checkOutDate}
										</p>
										<p className="text-m">
											{productData.price.toLocaleString()}원
										</p>
									</div>
								</div>
							</div>
						</div>
						<p className="text-m font-semibold text-center m-[20px]">
							양도가 완료되었습니다!
						</p>
					</div>
					<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
						<button
							onClick={() => navigate('/purchase')}
							className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
						>
							구매내역 확인하기
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Chat;

export interface ChatProps {
	chatList: ChatItemType[] | null;
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
