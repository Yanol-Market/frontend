import { instance } from './axios';

// 구매내역-구매중 조회 API
export const getPurchases = async () => {
	try {
		const res = await instance.get('/api/purchases');
		return res.data;
		console.log(res.data);
	} catch (e) {
		console.log('구매내역-구매중 조회 실패', e);
	}
};
