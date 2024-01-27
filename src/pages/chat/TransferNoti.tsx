import React from 'react';
import { useRecoilValue } from 'recoil';
import {
	chatRoomIdState,
	productDataState,
	productIdState,
	sendMessage,
	userIdState,
} from '../../recoil/atom';
import dayjs from 'dayjs';
import instance from '../../apis/axios';

interface TransferNotiProps {
	setTransferNoti: (value: boolean) => void;
	transfer: () => void;
}

const TransferNoti: React.FC<TransferNotiProps> = ({
	setTransferNoti,
	transfer,
}) => {
	const productData = useRecoilValue(productDataState);
	const productName = `${productData?.accommodationName} ${productData?.roomName}`;
	const product = productName.substring(0, 22);
	const startDate = productData?.checkInDate;
	const endDate = productData?.checkOutDate;
	const checkInDate = dayjs(startDate).format('YYYY년 MM월 DD일');
	const checkOutDate = dayjs(endDate).format('DD일');
	const productId = useRecoilValue(productIdState);
	const chatRoomId = useRecoilValue(chatRoomIdState);
	const userId = useRecoilValue(userIdState);

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

	console.log('트랜스퍼 노티', productData);
	return (
		<div>
			<div className="text-lg">
				<div className="z-50 absolute top-0 h-[100%] w-[430px] bg-black opacity-75"></div>
				<div className="z-50 animate-slide-up absolute bottom-0 h-[426px] w-[100%] bg-white rounded-t-[20px] leading-tight tracking-tight">
					<div className="text-body m-[30px] text-center leading-[35px]">
						<p>양도 신청하기</p>
					</div>
					<button
						onClick={() => setTransferNoti(false)}
						className="absolute top-[30px] right-[20px]"
					>
						<img src="/assets/images/closeModal.svg" alt="" />
					</button>

					<div className="flex items-center flex-col">
						<div className="bg-[#FAFAFA] items-center rounded-[12px] h-[95px] w-[90%] p-[10px]">
							<p className="text-sm ml-[10px]">골든티켓 등록번호 {productId}</p>
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

					<p className="text-body m-[30px] tracking-wider leading-6">
						해당 상품을 <strong>`{productData.receiverNickname}`</strong>님께
						양도하시겠습니까? <br /> 양도 후에는 취소가 불가합니다.
					</p>

					<div className="w-[100%] flex justify-between absolute bottom-0 h-[110px]">
						<div
							onClick={() => {
								transferReject();
								setTransferNoti(false);
							}}
							className="w-[175px] bottom-[25px] text-[white] text-lg cursor-pointer ml-[30px] h-[42px] bg-[#e5e5e5] rounded-[12px] flex items-center justify-center"
						>
							아니오
						</div>
						<div
							onClick={() => {
								transfer();
								setTransferNoti(false);
							}}
							className="w-[175px] bottom-[25px] text-lg cursor-pointer mr-[30px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
						>
							예
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransferNoti;
