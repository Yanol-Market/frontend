import React from 'react';


export type HomeContentTitle = {
	title: string;
	desc: string;
	img: string;
};

export const HomeContentTitle = ({
	title,
	desc,
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
			</div>
			<p className="text-descGray text-m">{desc}</p>
		</div>
	);
};
