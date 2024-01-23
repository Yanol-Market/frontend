// 금액 ,
export const formatNumber = (number: number) => {
	const formattedNumber = number.toFixed(0);
	return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 금액 , (string으로 받는 경우)
export const addCommas = (value: string | null) => {
	if (!value) return '';
	const numberValue = Number(value);
	if (isNaN(numberValue)) return '';

	return numberValue.toLocaleString();
};

// 금액 , 스트링 반환
export const formatNumberString = (number: number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 날짜 요일 반환 함수
export const formatWeek = (dateString: string) => {
	const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
	const date = new Date(dateString);
	const dayIndex = date.getDay();
	return daysOfWeek[dayIndex];
};

// 초 제외한 시간을 반환하는 함수
export const formatTime = (time: string) => {
	const [hour, minute] = time.split(':');
	return `${hour}:${minute}`;
};

// 거래 일시 시간 반환하는 함수 "2024-01-10T14:00:00" => 24.01.01. 01:01
export const formatDateTime = (dateTimeString: string) => {
	const dateTime = new Date(dateTimeString);
	const year = dateTime.getFullYear().toString().slice(2);
	const month = `0${dateTime.getMonth() + 1}`.slice(-2);
	const day = `0${dateTime.getDate()}`.slice(-2);
	const hours = `0${dateTime.getHours()}`.slice(-2);
	const minutes = `0${dateTime.getMinutes()}`.slice(-2);

	return `${year}.${month}.${day}. ${hours}:${minutes}`;
};

// 입력된 날짜가 현재 날짜와 같은 날이면 시간 반환, 그렇지 않으면 며칠전인지 반환
export const formatTimeAgo = (dateTimeString: string) => {
	const dateTime = new Date(dateTimeString);
	dateTime.setHours(dateTime.getHours() + 9);
	const currentDate = new Date();

	const isSameDay =
		dateTime.getDate() === currentDate.getDate() &&
		dateTime.getMonth() === currentDate.getMonth() &&
		dateTime.getFullYear() === currentDate.getFullYear();

	if (isSameDay) {
		const hours = `0${dateTime.getHours()}`.slice(-2);
		const minutes = `0${dateTime.getMinutes()}`.slice(-2);
		return `${hours}:${minutes}`;
	} else {
		const timeDifference = currentDate.getTime() - dateTime.getTime();
		const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

		if (daysAgo < 30) {
			return `${daysAgo + 1}일 전`;
		} else if (daysAgo < 365) {
			const monthsAgo = Math.floor(daysAgo / 30);
			return `${monthsAgo}달 전`;
		} else {
			const yearsAgo = Math.floor(daysAgo / 365);
			return `${yearsAgo}년 전`;
		}
	}
};

// 날짜 반환하는 함수 "2024-01-10" => "24.01.01"
export const formatDate = (dateString: string) => {
	const dateObject = new Date(dateString);
	const year = dateObject.getFullYear();
	const month = `0${dateObject.getMonth() + 1}`.slice(-2);
	const day = `0${dateObject.getDate()}`.slice(-2);
	return `${year}.${month}.${day}`;
};

export const formatArea = (areaCode: string) => {
	let area;
	switch (areaCode) {
		case 'ALL':
			area = '전체';
			break;
		case 'SEOUL':
			area = '서울';
			break;
		case 'GYEONGGI':
			area = '경기';
			break;
		case 'INCHEON':
			area = '인천';
			break;
		case 'GANGWON':
			area = '강원';
			break;
		case 'JEJU':
			area = '제주';
			break;
		case 'DAEJEON':
			area = '대전';
			break;
		case 'CHUNGBUK':
			area = '충북';
			break;
		case 'CHUNGNAM':
			area = '충남';
			break;
		case 'BUSAN':
			area = '부산';
			break;
		case 'ULSAN':
			area = '울산';
			break;
		case 'GYEONGNAM':
			area = '경남';
			break;
		case 'DAEGU':
			area = '대구';
			break;
		case 'GYEONGBUK':
			area = '경북';
			break;
		case 'GWANGJU':
			area = '광주';
			break;
		case 'JEONNAM':
			area = '전남';
			break;
		case 'JEONBUK':
			area = '전북';
			break;
	}
	return area;
};

export function FormatLimitText(text: string, maxLength: number) {
	if (text.length > maxLength) {
		return text.substring(0, maxLength) + '...';
	}
	return text;
}
