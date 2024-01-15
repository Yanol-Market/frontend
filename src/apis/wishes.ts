import { instanceTest } from './axios';

export const getWishes = async () => {
	try {
		const res = await instanceTest.get('api/wishes');
		if (res) {
			return res.data;
		}
	} catch (err) {
		throw new Error('찜 상품 가져오기 실패');
	}
};
