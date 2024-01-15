import React from 'react';
import { SearchResultList } from './SearchResultList';

export const SearchResultContent = () => {
	return (
		<div>
			<p>{`총 ${1}건`}</p>
			<SearchResultList />
		</div>
	);
};
