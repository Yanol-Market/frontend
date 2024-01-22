function formatDate(inputDate: any) {
	const date = new Date(inputDate);

	// 월, 일을 두 자리 수로 변환
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	// 요일 구하기
	const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
	const dayOfWeek = daysOfWeek[date.getDay()];

	// 결과 반환
	return `${month}-${day}(${dayOfWeek})`;
}
export { formatDate };
