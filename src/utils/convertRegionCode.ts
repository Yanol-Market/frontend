export const convertRegionCode = (regionName: string) => {
	const regionCode: { [key: string]: string } = {
		SEOUL: '서울',
		GYEONGGI: '경기',
		INCHEON: '인천',
		GANGWON: '강원',
		JEJU: '제주',
		DAEJEON: '대전',
		CHUNGBUK: '충북',
		CHUNGNAM: '충남',
		BUSAN: '부산',
		ULSAN: '울산',
		GYEONGNAM: '경남',
		DAEGU: '대구',
		GYEONGBUK: '경북',
		GWANGJU: '광주',
		JEONNAM: '전남',
		JEONBUK: '전북',
	};
	return regionCode[regionName] || regionName;
};
