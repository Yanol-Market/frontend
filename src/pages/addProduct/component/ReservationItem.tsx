import React, { useState } from 'react';

export interface Reservation {
	reservationNumber: number;
	reservationDate: string;
	hotelName: string;
	roomInfo: string;
	totalAmount: string;
	checkInDate: string;
	checkOutDate: string;
}

interface ReservationItemProps {
	reservation: Reservation;
	isSelected: boolean;
	onClick: () => void;
}

const ReservationItem = ({ reservation }: ReservationItemProps) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleClick = () => {
		// 예약 항목을 클릭했을 때의 동작
		setIsSelected(!isSelected);
	};

	return (
		<div
			className={`bg-white mx-5 mt-5 rounded-xl p-[0.9375rem] border ${
				isSelected ? 'border-[#FFFAEB] bg-[#FFFAEB]' : 'border-borderGray '
			}`}
			onClick={handleClick}
		>
			{' '}
			<div
				className={`flex items-center justify-between ${
					isSelected ? 'text-black' : 'text-[#828282]'
				}`}
			>
				<p className="mr-2 text-sm ">
					예약번호 {reservation.reservationNumber}
				</p>
				<p className="text-sm">{reservation.reservationDate}</p>
			</div>
			<div
				className={`border-b w-full  mt-2 mb-[0.8125rem] ${
					isSelected ? 'text-[#FFF3C5]' : 'text-borderWhite'
				}`}
			/>
			<div className="flex flex-col">
				<div className="flex items-center justify-between">
					<p className="text-lg font-semibold mb-[0.3125rem]">
						{reservation.hotelName}
					</p>
					<p
						className={`text-sm border rounded-full px-[0.4rem] py-0.5  ${
							isSelected
								? 'border-[#FFF3C5] bg-[#FFF3C5]'
								: 'border-borderGray bg-[#FAFAFA]'
						}`}
					>
						숙박
					</p>
				</div>
				<p className="text-sm">{reservation.roomInfo}</p>
			</div>
			<div className="flex items-end flex-col text-m">
				<p className="mb-[0.625rem]">{reservation.totalAmount}</p>
				<div
					className={`items-center flex  w-full h-[3.875rem] rounded-md ${
						isSelected ? 'bg-[#FFF3C5]' : 'bg-[#FAFAFA]'
					}`}
				>
					<div className="flex-1">
						{/* 체크인 정보 */}
						<div className="text-center">
							<p className="font-semibold mb-[0.35rem]">체크인</p>
							<p>{reservation.checkInDate}</p>
						</div>
					</div>
					<div
						className={`vertical-line border-r h-[1.875rem] ${
							isSelected ? 'text-[#FFCC00]' : 'text-[#bdbdbd]'
						}`}
					/>
					<div className="flex-1">
						{/* 체크아웃 정보 */}
						<div className="text-center">
							<p className="font-semibold mb-[0.35rem]">체크아웃</p>
							<p>{reservation.checkOutDate}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationItem;
