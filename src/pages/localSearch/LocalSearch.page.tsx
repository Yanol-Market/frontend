import React from 'react';
import { Header } from '../../component/common/Header';
import { Location } from './component/Location';

const locationData = [
	{ title: '서울', imgSrc: 'assets/images/location_seoul.svg' },
	{ title: '경기', imgSrc: 'assets/images/location_gyungki.svg' },
	{ title: '인천', imgSrc: 'assets/images/location_incheon.svg' },
	{ title: '강원', imgSrc: 'assets/images/location_gangwon.svg' },
	{ title: '제주', imgSrc: 'assets/images/location_jeju.svg' },
	{ title: '대전', imgSrc: 'assets/images/location_daejeon.svg' },
	{ title: '충북', imgSrc: 'assets/images/location_chungbuk.svg' },
	{ title: '충남/세종', imgSrc: 'assets/images/location_chungnam.svg' },
	{ title: '부산', imgSrc: 'assets/images/location_busan.svg' },
	{ title: '울산', imgSrc: 'assets/images/location_ulsan.svg' },
	{ title: '경남', imgSrc: 'assets/images/location_gyungnam.svg' },
	{ title: '대구', imgSrc: 'assets/images/location_daegu.svg' },
	{ title: '경북', imgSrc: 'assets/images/location_gyungbuk.svg' },
	{ title: '광주', imgSrc: 'assets/images/location_gwangju.svg' },
	{ title: '전남', imgSrc: 'assets/images/location_jeonnam.svg' },
	{ title: '전주/전북', imgSrc: 'assets/images/location_jeonbuk.svg' },
];

export const LocalSearch = () => {
	return (
		<div>
			<Header title="어디로 갈까요?" />
			<main className="h-[90vh] mt-5 border-solid border-borderWhite border-t-[1px] pt-[25px]">
				<div className='grid grid-cols-5 px-5 gap-y-[25px]'>
					{locationData.map((item, index) => (
						<Location key={index} title={item.title} imgSrc={item.imgSrc} />
					))}
				</div>
			</main>
		</div>
	);
};
