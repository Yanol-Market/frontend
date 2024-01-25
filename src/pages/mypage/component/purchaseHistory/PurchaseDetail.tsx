import React, { useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useQueryBoughtDetail } from '../../../../hooks/useQueryPurchases';
import {
	formatDateTime,
	formatNumber,
	formatTime,
	formatTimeAgo,
	formatWeek,
} from '../../../../utils/formate';
import { reservationTypeTrans } from '../../../../utils/translate';
import { useSearchParams } from 'react-router-dom';

const PurchaseDetail = () => {
	const [searchParams] = useSearchParams();
	const orderId = searchParams.get('order');

	const { data, isLoading, error } = useQueryBoughtDetail(`${orderId}`);

	console.log('구매왕료 상세 ', data);

	if (isLoading) {
		return <div> isLoading </div>;
	}

	if (error) {
		return <div> error </div>;
	}

	if (data) {
		return (
			<div className="pb-[80px] pt-4 flex items-center justify-center">
				<div
					className="h-[672px] w-[375PX] bg-cover bg-center mr-1"
					style={{
						backgroundImage: `url('/assets/images/ticket_1.svg')`,
					}}
				>
					<div className=" pt-[116px] px-10 ml-1">
						<div className="pb-4 flex justify-between items-center">
							<p className="text-sm ">골든티켓 등록번호 {data.productId}</p>
						</div>
						<div className="flex">
							<img
								src={data.accommodationImage}
								alt="image"
								className="w-[80px] h-[80px] rounded-md"
							/>
							<div className="px-[10px] flex flex-col justify-between ">
								<div>
									<div className="text-lg font-bold">
										{data.accommodationName}
									</div>
									<div className="flex items-center">
										<div className="text-lg flex pr-[8px] w-[50%]">
											{data.roomName}
										</div>

										<div className="border-r-2 border-borderGray h-[12px]"></div>

										<p className="text-lg pl-[8px] ">
											{data.standardNumber}인/최대 {data.maximumNumber}인
										</p>
									</div>
								</div>
								<div className="flex justify-between">
									<div className="text-lg font-bold ">
										{formatNumber(data.price)}원
									</div>
									<div className="text-sm border-[1px] border-[#e0e0e0] flex justify-center items-center rounded-[10px] w-[35px] h-[20px] p-[5px] ">
										<p>{reservationTypeTrans(data.reservationType)}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-[20px] mb-[10px] h-[78px] flex items-center justify-around text-center text-m bg-homeMain p-[10px] rounded-[10px]">
							<div>
								<p className="font-bold mb-[5px]">체크인</p>
								<div className="flex">
									<p>
										{data.checkInDate}({formatWeek(data.checkInDate)}){' '}
										{formatTime(data.checkInTime)}
									</p>
								</div>
							</div>
							<div className="p-10px border-r-[1px] border-main h-[40px]"></div>
							<div>
								<p className="font-bold mb-[5px]">체크아웃</p>
								<div className="flex">
									<p>
										{data.checkOutDate}({formatWeek(data.checkOutDate)}){' '}
										{formatTime(data.checkInTime)}
									</p>
								</div>
							</div>
						</div>
						{/* 최종 예약자 정보 */}
						<div className="pt-9">
							<div className="text-body py-4 font-bold ">최종 예약자 정보</div>{' '}
							<div className="flex justify-between items-center text-lg pb-2">
								<div className="text-descGray"> 이름</div>
								<div>{data.buyerName}</div>
							</div>
							<div className="flex justify-between items-center text-lg  pb-2">
								<div className="text-descGray"> 전화번호</div>
								<div>{data.buyerPhoneNumber}</div>
							</div>
							<div className="flex justify-between items-center text-lg  pb-2">
								<div className="text-descGray"> 이메일</div>
								<div>{data.buyerEmail}</div>
							</div>
							<div className="flex justify-between items-center text-lg  pb-2">
								<div className="text-descGray"> 거래일시</div>
								<div>{formatDateTime(data.completedDate)}</div>
							</div>
						</div>
						{/* 채팅ui */}
						<div className="border-borderGray border px-5 py-2 mt-2 flex items-center  justify-between rounded-lg">
							<div className="flex items-center justify-center">
								<div>
									<img src="/assets/images/userDefault.svg" alt="userDefault" />
								</div>
								<div className="text-lg px-3 text-descGray">
									{data.receiverNickname}
								</div>
								<div className="text-m text-descGray">
									{formatTimeAgo(data.lastUpdatedAt)}
								</div>
							</div>

							<div className="flex items-center">
								<div className="font-bold pr-3 text-descGray">
									{formatNumber(data.price)}
								</div>
								<div>
									<ArrowForwardIosIcon
										sx={{ width: '15px' }}
										className="cursor-pointer text-descGray"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return <div>알수 없는 오류</div>;
};

export default PurchaseDetail;
