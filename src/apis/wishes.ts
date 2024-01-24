import axios from './axios';

export const getWishes = async () => {
	try {
		const res = await axios.get('/products/wish'); // 임시 수정
		if (res) {
			return res.data;
		}
	} catch (err) {
		throw new Error('찜 상품 가져오기 실패');
	}
};
