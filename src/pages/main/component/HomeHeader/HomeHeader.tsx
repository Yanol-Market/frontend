import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderInfo } from './HeaderInfo';
import { SearchBar } from './SearchBar';

export const HomeHeader = () => {
	return (
		<header className="bg-homeMain px-5 pb-5">
			<div className='mb-8'>
				<HeaderInfo />
			</div>
			<div>
				<SearchBar />
			</div>
		</header>
	);
};
