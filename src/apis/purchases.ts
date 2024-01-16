import { instanceTest } from './axios';
import { ApiBuyingProd } from '../data/purchasesData';
import { AxiosResponse } from 'axios';

// 구매내역-구매중 조회 API
export const getPurchases = async (): Promise<ApiBuyingProd> => {
	const res: AxiosResponse<ApiBuyingProd> =
		await instanceTest.get('/api/purchases');
	return res.data;
};
