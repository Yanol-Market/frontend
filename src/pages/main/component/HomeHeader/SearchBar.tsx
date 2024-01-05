import React from 'react';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
	return (
		<Link to="/search">
			<div className='bg-white flex px-4 py-1 rounded-lg'>
                <img className='flex text-center mr-4' src="assets/images/searchIcon.svg" alt="searchIcon" />
                <p className='font-pre text-m text-gray'>원하는 지역과 날짜의 숙소를 찾아보세요!</p>
            </div>
		</Link>
	);
};
