import React from 'react';
import { Header } from '../../component/common/Header';
import { SearchResultBar } from './component/SearchResultBar';
import { SearchResultList } from './component/SearchResultList';


export const SearchResult = () => {
	return (
		<div id="home" className="h-[100vh] relative">
			<div className="mb-[17px]">
				<Header title={'검색결과'} />
				<div className="flex justify-center">
					<SearchResultBar
						src={'/search'}
						text={'2023.12.23(토) ~ 2023.12.30(토),속초'}
					/>
				</div>
			</div>
			<div className='h-[81vh] overflow-scroll shadow scroll-smooth'>
				<div className="w-full pt-[13px] border-t-[7px] px-5 border-borderWhite">
					<SearchResultList />
				</div>
			</div>
		</div>
	);
};
