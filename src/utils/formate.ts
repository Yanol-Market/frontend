// 금액 ,
export const formatNumber = (number: number) => {
	const formattedNumber = number.toFixed(0);
	return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
		return `${daysAgo + 1}일 전`;
	}
};
