import React from 'react';
import { Link } from 'react-router-dom';

export const SearchBar = ({ src, text }: SearchBarType) => {
	return (
		<Link to={src}>
			<div className="bg-white flex px-4 py-1 rounded-lg">
				<img
					className="flex text-center mr-4"
					src="assets/images/searchIcon.svg"
					alt="searchIcon"
				/>
				<p className="font-pre text-m text-gray">{text}</p>
			</div>
		</Link>
	);
};

type SearchBarType = {
	src: string;
	text: string;
};
