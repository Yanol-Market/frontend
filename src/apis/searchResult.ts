import instance from './axios';

export const getSearchProducts = async (
	areaCode: string,
	keyword: string,
	checkInDate: string,
	checkOutDate: string,
	priceRange: string,
) => {
	console.log(`/products?areaCode=${areaCode}&keyword=${keyword}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&priceRange=${priceRange}`,)
	try {
		
		const res = await instance.get(
			`/products?areaCode=${areaCode}&keyword=${keyword}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&priceRange=${priceRange}`,
		);
		return res.data;
	} catch (error) {
		console.log('상품을 가져오지 못했습니다', error);
	}
};
