import React from 'react';
import { Link } from 'react-router-dom';

export type HomeContentTitle = {
	title: string;
	desc: string;
	src: string;
	img: string;
};

export const HomeContentTitle = ({
	title,
	desc,
	src,
	img,
}: HomeContentTitle) => {
	return (
		<div className="">
			<div className="flex justify-between">
				<div className='flex '>
					<h1 className="font-pre text-black font-semibold text-headline3 mr-1">
						{title}
					</h1>
					<img src={img} alt="" />
				</div>
				<Link to={src} className="flex">
					<img src="assets/images/back.svg" alt="" />
				</Link>
			</div>
			<p className="text-descGray text-m">{desc}</p>
		</div>
	);
};
