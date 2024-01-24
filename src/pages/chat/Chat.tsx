import React, { useState } from 'react';
import dayjs from 'dayjs';
import NegoPanel from './NegoPanel';
import ChatItem from './ChatItem';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductData } from './Chat.page';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	chatStatusState,
	paymentsState,
	productDataState,
	productIdState,
	productStatusState,
	userIdState,
	userNameState,
} from '../../recoil/atom';
import { getPaymentsDetail } from '../../apis/paymentsDetail';

const Chat: React.FC<ChatProps> = ({ chatList, setNegoStatus }) => {
	const date = dayjs();
	const now = date.format('YYYY.MM.DD');
	const [nego, setNego] = useState(true);
	const [offered, setOffered] = useState(false);
	const userName = useRecoilValue(userNameState);
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

	console.log('productId', productId);

	const handleClickPayMentsButton = async (link: string) => {
		try {
			const payData = await getPaymentsDetail(`${productId}`);
			console.log('payData', payData);
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
				(nego ? (
					<NegoPanel
						setNegoStatus={setNegoStatus}
						setNego={setNego}
						setOffered={setOffered}
					/>
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
						원래 가격으로 결제하기
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

			{productStatus === 'RESERVED' && chatStatus !== 'PAYMENT_PENDING' && (
				<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
					<div className="w-[90%] bottom-[25px] text-lg m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center">
						상품이 이미 예약중입니다.
					</div>
				</div>
			)}

			{productStatus === 'RESERVED' && chatStatus !== 'TRANSFER_PENDING' && (
				<div></div>
			)}

			{productStatus === 'SOLD_OUT' && chatStatus === 'TRANSFER_COMPLETE' && (
				<>
					<div>
						<div className="flex items-center flex-col">
							<div className="bg-[#FAFAFA] items-center rounded-[12px] h-[95px] w-[90%] p-[10px]">
								<p className="text-sm ml-[10px]">
									골든티켓 등록번호 202401230001
								</p>
								<div className="flex">
									<img
										src={productData.accommodationImage}
										className="h-[56px] w-[56px] rounded-[12px] m-[5px]"
										alt=""
									/>
									<div className="p-[10px]">
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
						<p className="text-m font-semibold">양도가 완료되었습니다!</p>
					</div>
					<div className="absolute bottom-0 h-[110px] w-[430px] bg-[#fafafa]">
						<button className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center">
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
