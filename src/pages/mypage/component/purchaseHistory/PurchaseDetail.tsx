import React, { useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useQueryBoughtDetail } from '../../../../hooks/useQueryPurchases';
import { getBoughtDetailList } from '../../../../apis/purchases';
import { BoughtDetailProd } from '../../../../data/purchasesData';
const prodData = {
	productId: 145845145,
	accommodationImage: '/assets/images/reserveRoom.svg',
	accommodationName: '에코그린 리조트 호텔',
	roomName: '디럭스 더블',
	reservationType: '숙박',
	standardNumber: 2,
	maximumNumber: 4,
	checkInTime: '14:00:00',
	checkOutTime: '12:00:00',
	checkInDate: '2024-01-10',
	checkOutDate: '2024-01-15',
	price: 100000,
	buyerName: '구매자 이름',
	buyerPhoneNumber: '구매자 전화번호',
	buyerEmail: '구매자 이메일',
	completedDate: '2024-01-01T01:01:01',
	chatRoomId: 456458421,
	receiverNickname: '닉네임1',
	receiverProfileImage: '프로필 이미지 경로',
	lastUpdatedAt: '20',
};

const PurchaseDetail = () => {
	const { data, isLoading, error } = useQueryBoughtDetail('1');

	console.log('구매왕료 상세 ', data);

	if (isLoading) {
		return <div> isLoading </div>;
	}

	if (data) {
		return (
			<div className="pb-[80px] pt-4 flex items-center justify-center">
				<div
					className="h-[672px] w-[375PX] bg-cover bg-center"
					style={{
						backgroundImage: `url('/assets/images/ticket_1.svg')`,
					}}
				>
					<div className=" pt-[115px] px-10">
						<div className="pb-4 flex justify-between items-center">
							<p className="text-sm ">골든티켓 등록번호 {data.productId}</p>
						</div>
						<div className="flex">
							<img
								src={data.accommodationImage}
								alt="image"
								className="w-[80px] h-[80px]"
							/>
							<div className="px-[10px]">
								<p className="text-lg font-bold">{data.accommodationName}</p>
								<div className="flex">
									<p className="text-lg pr-[8px]">{data.roomName}</p>
									<div className="flex items-center">
										<div className="border-r-2 border-borderGray h-[12px]"></div>
									</div>
									<p className="text-lg pl-[8px]">
										{data.standardNumber}인/최대 {data.maximumNumber}인
									</p>
								</div>
								<p className="text-lg font-bold pt-[15px]">{data.price}원</p>
							</div>
							<div className="flex justify-end h-[80px] items-end">
								<div className="text-sm border-[1px] border-[#e0e0e0] flex flex-col justify-center items-center rounded-[10px] w-[35px] h-[20px] p-[5px] text-center">
									<p>{data.reservationType}</p>
								</div>
							</div>
						</div>
						<div className="mt-[20px] mb-[10px] h-[78px] flex items-center justify-around text-center text-m bg-homeMain p-[10px] rounded-[10px]">
							<div>
								<p className="font-bold mb-[5px]">체크인</p>
								<div className="flex">
									<p>{data.checkInDate}</p>
									<p> {data.checkInTime}</p>
								</div>
							</div>
							<div className="p-10px border-r-[1px] border-main h-[40px]"></div>
							<div>
								<p className="font-bold mb-[5px]">체크아웃</p>
								<div className="flex">
									<p>{data.checkOutDate}</p>
									<p> {data.checkOutTime}</p>
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
								<div>{data.completedDate}</div>
							</div>
						</div>
						{/* 채팅ui */}
						<div className="border-borderGray border px-5 py-3 mt-2 flex items-center  justify-between rounded-lg">
							<div className="flex items-center justify-center">
								<div>
									<img src="/assets/images/userDefault.svg" alt="userDefault" />
								</div>
								<div className="text-lg px-3 text-descGray">
									{' '}
									{data.receiverNickname}{' '}
								</div>
								<div className="text-m text-descGray">
									{' '}
									{data.lastUpdatedAt}분전
								</div>
							</div>

							<div className="flex items-center">
								<div className="font-bold pr-3 text-descGray">{data.price}</div>
								<div>
									<ArrowForwardIosIcon
										sx={{ width: '15px' }}
										className="cursor-pointer text-descGray"
									/>
								</div>{' '}
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
