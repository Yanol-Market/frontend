import React from 'react';
import { Link } from 'react-router-dom';

export const SearchResultBar = ({ src, text }: SearchResultBarType) => {
	return (
		<Link
			to={src}
			className="flex items-center px-[15px] w-[335px] h-[44px] bg-lightGray rounded-xl "
		>
			<img className="mr-[15px]" src="assets/images/search-m.svg" alt="searchIcon" />
			<p className="text-lg text-descGray w-full line-clamp-1">{text}</p>
		</Link>
	);
};

type SearchResultBarType = {
	src: string;
	text: string;
};
