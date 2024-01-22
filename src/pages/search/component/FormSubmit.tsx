import React from 'react';
import { useRecoilValue } from 'recoil';
import {
	checkedState,
	endState,
	searchInputState,
	selectOptionState,
	startState,
} from '../../../recoil/atom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { formatDate } from '../../../utils/b';

export const FormSubmit = () => {
	const selectOption = useRecoilValue(selectOptionState);
	const inputValue = useRecoilValue(searchInputState);
	const checkInDate = useRecoilValue(startState);
	const checkOutDate = useRecoilValue(endState);
	const checkedValue = useRecoilValue(checkedState);
	const checkInFormatString = moment(checkInDate).format('YY-MM-DD');
	const checkOutFormatString = moment(checkOutDate).format('YY-MM-DD');

	return (
		<Link
			to={`/searchResult?selectOption=${selectOption}&inputValue=${inputValue}&checkIndate=${checkInFormatString}&checkOutDate=${checkOutFormatString}&priceRange=${checkedValue}`}
			className="mx-5 rounded-[12px] p-2 text-lg text-white bg-main flex justify-center item-center cursor-pointer"
		>
			검색하기
		</Link>
	);
};
