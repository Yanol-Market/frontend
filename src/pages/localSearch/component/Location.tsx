import React from 'react';
import { Link } from 'react-router-dom';

export type LocationType = {
	title: string;
	imgSrc: string;
};

export const Location = ({ title, imgSrc }: LocationType) => {
	return (
		<Link to=''>
			<div className="flex flex-col justify-center items-center">
				<img className="w-[50px] y-[50px] rounded-full" src={imgSrc} alt="location image" />
				<p className="w-[50px] text-center font-pre text-m text-fontBlack leading-[25px]">
					{title}
				</p>
			</div>
		</Link>
	);
};
