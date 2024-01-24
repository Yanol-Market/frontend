import instance, { instanceTest } from './axios';
import {
	ApiBoughtDetailProd,
	ApiBoughtProd,
	ApiBuyingProd,
} from '../data/purchasesData';
import { AxiosResponse } from 'axios';

// 구매내역-구매중 조회 API
export const getPurchases = async (): Promise<ApiBuyingProd> => {
	const res: AxiosResponse<ApiBuyingProd> = await instance.get(
		'/orders/history/progress',
	);
	return res.data;
};

// 구매내역-구매완료-리스트 조회 API
export const getBoughtList = async (): Promise<ApiBoughtProd> => {
	const res: AxiosResponse<ApiBoughtProd> = await instance.get(
		'/orders/history/completed',
	);
	return res.data;
};

// 구매내역-구매완료 상세조회 API
export const getBoughtDetailList = async (
	orderId: string,
): Promise<ApiBoughtDetailProd> => {
	const res: AxiosResponse<ApiBoughtDetailProd> = await instanceTest.get(
		`/orders/history/completed/${orderId}`,
	);
	return res.data;
};

// 구매내역- 구매완료 - 삭제
export const delBoughtProd = async (orderId: number) => {
	const res = await instance.delete(`/products/history/completed/${orderId}`);
	return res.data;
};
