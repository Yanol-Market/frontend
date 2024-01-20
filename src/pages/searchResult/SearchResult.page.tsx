import React from 'react';
import { Header } from '../../component/common/Header';
import { SearchResultBar } from './component/SearchResultBar';
import { SearchResultList } from './component/SearchResultList';
import { useLocation, useParams } from 'react-router-dom';
import moment from 'moment';
import { formatDate } from '../../utils/b';
import { formatArea, formatWeek } from '../../utils/formate';

export const SearchResult = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const areaCode = searchParams.get('selectOption');
	const checkInDate = searchParams.get('checkIndate');
	const checkOutDate = searchParams.get('checkOutDate');
	const startDate = moment(moment(checkInDate, 'YY-MM-DD').toDate()).format(
		'YYYY.MM.DD',
	);
	const endDate = moment(moment(checkOutDate, 'YY-MM-DD').toDate()).format(
		'YYYY.MM.DD',
	);
	const startDay = formatWeek(
		moment(moment(checkInDate, 'YY-MM-DD').toDate()).format('YYYY-MM-DD'),
	);
	const endDay = formatWeek(
		moment(moment(checkOutDate, 'YY-MM-DD').toDate()).format('YYYY-MM-DD'),
	);
	const area = formatArea(areaCode as string);
	return (
		<div id="home" className="h-[100vh] relative">
			<div className="mb-[17px]">
				<Header title={'검색결과'} />
				<div className="flex justify-center">
					<SearchResultBar
						src={'/search'}
						text={`${startDate}(${startDay}) ~ ${endDate}(${endDay}), ${area}`}
					/>
				</div>
			</div>
			<div className="h-[81vh] overflow-scroll shadow scroll-smooth">
				<div className="w-full pt-[13px] border-t-[7px] px-5 border-borderWhite">
					<SearchResultList />
				</div>
			</div>
		</div>
	);
};
