// ReservationItem.tsx
import React from 'react';

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
}

const ReservationItem: React.FC<ReservationItemProps> = ({ reservation }) => {
	return (
		<div className="bg-[#FAFAFA] mx-5 mt-5 rounded-xl p-[0.9375rem]">
			<div className="flex items-center text-[#828282] justify-between">
				<p className="mr-2 text-sm">예약번호 {reservation.reservationNumber}</p>
				<p className="text-sm">{reservation.reservationDate}</p>
			</div>
			<div className="border-b w-full text-borderWhite mt-2 mb-[0.8125rem]" />

			<div className="flex flex-col">
				<div className="flex items-center justify-between">
					<p className="text-lg font-semibold mb-[0.3125rem]">
						{reservation.hotelName}
					</p>
					<p className="text-sm border rounded-full border-borderGray px-2 py-1">
						숙박
					</p>
				</div>
				<p className="text-sm">{reservation.roomInfo}</p>
			</div>
			<div className="flex items-end flex-col text-m">
				<p className="mb-[0.625rem]">{reservation.totalAmount}</p>
				<div className="items-center flex bg-borderGray w-full h-[3.875rem] rounded-md">
					<div className="flex-1">
						{/* 체크인 정보 */}
						<div className="text-center">
							<p className="font-semibold mb-[0.35rem]">체크인</p>
							<p>{reservation.checkInDate}</p>
						</div>
					</div>
					<div className="vertical-line border-r text-[#bdbdbd] h-[2.8125rem]" />
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
