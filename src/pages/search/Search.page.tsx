import React from 'react';
import { Header } from '../../component/common/Header';
import { SearchProduct } from './component/SearchProduct';
import { SearchDate } from './component/SearchDate';
import { WishPriceContent } from './component/WishPriceContent';
import { FormSubmit } from './component/FormSubmit';
import { SearchFooter } from './component/SearchFooter';

export const Search = () => {
	const userProfile = localStorage.getItem('userProfileInfo');

	return (
		<div className="h-[100vh]">
			<Header title={'어떤 숙소를 찾으시나요?'} />
			<div className="flex justify-center mt-5 mb-5">
				<SearchProduct />
			</div>
			<div className="flex justify-center mb-[30px]">
				<SearchDate />
			</div>
			<div className="flex justify-center mb-[30px]">
				<WishPriceContent />
			</div>
			<div className="mb-[45px]">
				<FormSubmit />
			</div>
			{userProfile && (
				<div>
					<SearchFooter />
				</div>
			)}
		</div>
	);
};
