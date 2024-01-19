import React, { useState } from 'react';

export interface Reservation {
	reservationNumber: number;
	reservationDate: string;
	hotelName: string;
	numberOfPeople: number; // 인원 수
	maxNumberOfPeople: number; // 최대 인원 수
	roomInfo: string;
	totalAmount: string;
	checkInDate: string;
	checkOutDate: string;
	checkInTime: string;
	checkOutTime: string;
	accommodationType: string;
	isRegistered: boolean; // 상품 등록 여부
}

interface ReservationItemProps {
	reservation: Reservation;
	isSelected: boolean;
	onClick: () => void;
}

const ReservationItem = ({
	reservation,
	isSelected,
	onClick,
}: ReservationItemProps) => {
	const isRegistered = reservation.isRegistered;

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
				<p className="mr-2 text-sm">예약번호 {reservation.reservationNumber}</p>
				<p className="text-sm">{reservation.reservationDate}</p>
			</div>
			<div
				className={`border-b w-full mt-2 mb-[0.8125rem] ${
					isSelected ? 'text-homeMain' : 'text-borderWhite'
				}`}
			/>
			<div className="flex flex-col">
				<div className="flex items-center justify-between">
					<p className={`text-lg font-semibold mb-[0.3125rem]}`}>
						{reservation.hotelName}
					</p>
					<p
						className={`text-sm border rounded-full px-[0.4rem] py-0.5  ${
							isSelected
								? 'border-homeMain bg-homeMain'
								: 'border-borderGray bg-lightGray'
						}`}
					>
						{reservation.accommodationType}
					</p>
				</div>
				<p className="text-sm flex items-center">
					<span>{reservation.roomInfo}</span>
					<div
						className={`h-2 w-[0.01rem] mx-[0.4rem]  ${
							isSelected ? 'bg-homeMain' : 'bg-borderGray'
						}`}
					/>
					<span>{`${reservation.numberOfPeople}인`}</span>
					<div
						className={`h-2 w-[0.01rem] mx-[0.4rem]  ${
							isSelected ? 'bg-homeMain' : 'bg-borderGray'
						}`}
					/>{' '}
					<span>{`최대 ${reservation.maxNumberOfPeople}인`}</span>
				</p>
			</div>
			<div className="flex items-end flex-col text-m">
				<p className="mb-[0.625rem]">{reservation.totalAmount}</p>
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
							<p className="whitespace-pre">{`${reservation.checkInDate}  ${reservation.checkInTime}`}</p>
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
							<p className="whitespace-pre">{`${reservation.checkOutDate}  ${reservation.checkOutTime}`}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationItem;
