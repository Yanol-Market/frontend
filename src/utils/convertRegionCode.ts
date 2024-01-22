export const convertRegionCode = (regionName: string) => {
	const regionCode: { [key: string]: string } = {
		서울: 'SEOUL',
		경기: 'GYEONGGI',
		인천: 'INCHEON',
		강원: 'GANGWON',
		제주: 'JEJU',
		대전: 'DAEJEON',
		충북: 'CHUNGBUK',
		충남: 'CHUNGNAM',
		부산: 'BUSAN',
		울산: 'ULSAN',
		경남: 'GYEONGNAM',
		대구: 'DAEGU',
		경북: 'GYEONGBUK',
		광주: 'GWANGJU',
		전남: 'JEONNAM',
		전북: 'JEONBUK',
	};
	return regionCode[regionName] || regionName;
};
