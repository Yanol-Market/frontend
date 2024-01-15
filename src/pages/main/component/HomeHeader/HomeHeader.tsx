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
				<SearchBar src={'/search'} text={'당신이 원하는 지역과 날짜의 숙소를 찾아보세요!'} />
			</div>
		</header>
	);
};
