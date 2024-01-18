import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardProdProps } from '../../../../data/purchasesData';
import { reservationTypeTrans } from '../../../../utils/translate';
import {
	formatNumber,
	formatTime,
	formatWeek,
} from '../../../../utils/formate';

const CardProd = (props: CardProdProps) => {
	const location = useLocation();
	const currentPath = location.pathname;

	console.log(currentPath);
	return (
		<>
			<div>
				<div className="flex">
					<img
						src={props.accommodationImage}
						alt="image"
						className="w-[80px] h-[80px]"
					/>
					<div className="w-[60%] px-[10px]">
						<p className="text-lg font-bold">{props.accommodationName}</p>
						<div className="flex">
							<p className="text-lg pr-[8px]">{props.roomName}</p>
							<div className="flex items-center">
								<div className="border-r-2 border-borderGray h-[12px]"></div>
							</div>
							<p className="text-lg pl-[8px]">
								{props.standardNumber}인/최대 {props.maximumNumber}인
							</p>
						</div>
						<p className="text-lg font-bold pt-[15px]">
							{formatNumber(props.goldenPrice)}
						</p>
					</div>
					<div className="text-sm">
						<div className="flex flex-col justify-center items-center rounded-[10px] bg-lightGray border-[1px] border-[#e0e0e0] h-[20px] p-[5px] text-center ">
							<p className="">{reservationTypeTrans(props.reservationType)}</p>
						</div>
					</div>
				</div>
				<div className="mt-[20px] mb-[10px] flex justify-around text-center text-m bg-lightGray p-[10px] rounded-[10px]">
					<div>
						<p className="font-bold mb-[5px]">체크인</p>
						<div className="flex">
							<p>
								{props.checkInDate}({formatWeek(props.checkInDate)}){' '}
								{formatTime(props.checkInTime)}
							</p>
						</div>
					</div>
					<div className="p-10px border-r-[1px] border-[#e0e0e0] h-[40px]"></div>
					<div>
						<p className="font-bold mb-[5px]">체크아웃</p>
						<div className="flex">
							<p>
								{props.checkOutDate}({formatWeek(props.checkOutDate)}){' '}
								{formatTime(props.checkInTime)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardProd;
