import React, { useState } from 'react';

export interface Reservation {
	reservationId: number;
	reservationStatus: string; // 상품 등록 여부
	accommodationName: string;
	reservationType: string;
	roomName: string;
	standardNumber: number; // 인원 수
	maximumNumber: number; // 최대 인원 수
	checkInDate: string;
	checkOutDate: string;
	checkInTime: string;
	checkOutTime: string;
	nights: number;
	reservationDate: string;

	originPrice: number;
	yanoljaPrice: number;
}

interface ReservationItemProps {
	reservation: Reservation;
	isSelected: boolean;
	onClick: () => void;
}

const formatDate = (dateString: string) => {
	const dateObject = new Date(dateString);
	const year = dateObject.getFullYear();
	const month = String(dateObject.getMonth() + 1).padStart(2, '0');
	const day = String(dateObject.getDate()).padStart(2, '0');
	return `${year}.${month}.${day}`;
};

const formatNumberWithCommas = (number: number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const ReservationItem = ({
	reservation,
	isSelected,
	onClick,
}: ReservationItemProps) => {
	const isRegistered = reservation.reservationStatus === 'REGISTERED';

	const formattedReservationType =
		reservation.reservationType === 'DAY_USE' ? '대실' : '숙박';

	const handleClick = () => {
		if (isRegistered) {
			alert('이미 골드티켓에 등록된 상품입니다!');
		} else {
			onClick();
		}
	};

	return (
		<div
			className={`mx-5 mt-5 rounded-xl p-[0.9375rem] border ${
				isRegistered
					? 'border-lightGray bg-lightGray text-gray' // isRegistered true
					: isSelected
						? 'border-bgMain bg-bgMain' // isRegistered false & isSelected true
						: 'bg-white border-borderGray' // isRegistered false & isSelected false
			} cursor-pointer`}
			onClick={handleClick}
		>
			<div
				className={`flex items-center justify-between ${
					isRegistered
						? 'text-gray' // isRegistered true
						: isSelected
							? 'text-black'
							: 'text-descGray'
				}`}
			>
				<p className="mr-2 text-sm">예약번호 {reservation.reservationId}</p>
				<p className="text-sm">{formatDate(reservation.reservationDate)}</p>
			</div>
			<div
				className={`border-b w-full mt-2 mb-[0.8125rem] ${
					isSelected ? 'text-homeMain' : 'text-borderWhite'
				}`}
			/>
			<div className="flex flex-col">
				<div className="flex items-center justify-between">
					<p className={`text-lg font-semibold mb-[0.3125rem]}`}>
						{reservation.accommodationName}
					</p>
					<p
						className={`text-sm border rounded-full px-[0.4rem] py-0.5  ${
							isSelected
								? 'border-homeMain bg-homeMain'
								: 'border-borderGray bg-lightGray'
						}`}
					>
						{formattedReservationType}
					</p>
				</div>
				<p className="text-sm flex items-center">
					<span>{reservation.roomName}</span>
					<div
						className={`h-2 w-[0.01rem] mx-[0.4rem]  ${
							isSelected ? 'bg-homeMain' : 'bg-borderGray'
						}`}
					/>
					<span>{`${reservation.standardNumber}인`}</span>
					<div
						className={`h-2 w-[0.01rem] mx-[0.4rem]  ${
							isSelected ? 'bg-homeMain' : 'bg-borderGray'
						}`}
					/>
					<span>{`최대 ${reservation.maximumNumber}인`}</span>
				</p>
			</div>
			<div className="flex items-end flex-col text-m">
				<p className="mb-[0.625rem]">
					{reservation.nights !== 0 && `${reservation.nights}박 `}
					{formatNumberWithCommas(reservation.originPrice)}원
				</p>
				<div
					className={`items-center flex w-full h-[3.875rem] rounded-md ${
						isRegistered
							? 'bg-borderWhite' // isRegistered true
							: isSelected
								? 'bg-homeMain'
								: 'bg-lightGray'
					}`}
				>
					<div className="flex-1">
						{/* 체크인 정보 */}
						<div className="text-center">
							<p className="font-semibold mb-[0.35rem]">체크인</p>
							<p className="whitespace-pre">{`${formatDate(
								reservation.checkInDate,
							)}   ${reservation.checkInTime.slice(0, 5)}`}</p>
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
							<p className="whitespace-pre">{`${formatDate(
								reservation.checkOutDate,
							)}   ${reservation.checkOutTime.slice(0, 5)}`}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationItem;
