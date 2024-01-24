import React from 'react';
import { Link } from 'react-router-dom';
import { formatLocation } from '../../../utils/formate';
import { useRecoilState } from 'recoil';
import { endState, startState } from '../../../recoil/atom';
import moment from 'moment';

export type LocationType = {
	title: string;
	imgSrc: string;
};

export const Location = ({ title, imgSrc }: LocationType) => {
	const areaCode = formatLocation(title);
	const startDate = useRecoilState(startState);
	const endDate = useRecoilState(endState);
	const checkInFormatString = moment(startDate[0]).format('YY-MM-DD');
	const checkOutFormatString = moment(endDate[0]).format('YY-MM-DD');
	
	return (
		<Link
			to={`/searchResult?selectOption=${areaCode}&inputValue=&checkIndate=${checkInFormatString}&checkOutDate=${checkOutFormatString}&priceRange=FULL_RANGE`}
		>
			<div className="flex flex-col justify-center items-center">
				<img
					className="w-[50px] y-[50px] rounded-full"
					src={imgSrc}
					alt="location image"
				/>
				<p className="w-[50px] text-center font-pre text-m text-fontBlack leading-[25px]">
					{title}
				</p>
			</div>
		</Link>
	);
};
