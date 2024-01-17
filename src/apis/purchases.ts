import { instanceTest } from './axios';
import { ApiBoughtProd, ApiBuyingProd } from '../data/purchasesData';
import { AxiosResponse } from 'axios';

// 구매내역-구매중 조회 API
export const getPurchases = async (): Promise<ApiBuyingProd> => {
	const res: AxiosResponse<ApiBuyingProd> =
		await instanceTest.get('/api/purchases');
	return res.data;
};

// 구매내역-구매완료-리스트 조회 API
export const getBoughtList = async (): Promise<ApiBoughtProd> => {
	const res: AxiosResponse<ApiBoughtProd> = await instanceTest.get(
		'/api/purchase/history?status=COMPLETE',
	);
	return res.data;
};
