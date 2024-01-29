import instance from './axios';

export const getSearchProducts = async (
	areaCode: string,
	keyword: string,
	checkInDate: string,
	checkOutDate: string,
	priceRange: string,
	cursorId?: number,
	cursorCheckInDate?: string,
) => {
	try {
		const res = await instance.get(
			`/products?areaCode=${areaCode}&keyword=${keyword}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&priceRange=${priceRange}${
				cursorId
					? `&cursorId=${cursorId}&cursorCheckInDate=${cursorCheckInDate}`
					: ''
			}`,
		);
		return res.data;
	} catch (error) {
		// console.log('상품을 가져오지 못했습니다', error);
	}
};
