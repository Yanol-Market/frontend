import {
	ApiExpiredDetail,
	ApiSales,
	ApiSold,
	ApiSoldDetail,
} from '../data/salesData';
import { instanceTest } from './axios';
import { AxiosResponse } from 'axios';

// 구매내역-구매중 조회 API
export const getSales = async (): Promise<ApiSales> => {
	const res: AxiosResponse<ApiSales> = await instanceTest.get('/api/sales');
	return res.data;
};

// 구매완료 - 리스트 조회 API
export const getSoldList = async (): Promise<ApiSold> => {
	const res: AxiosResponse<ApiSold> = await instanceTest.get('/api/SoldList');
	return res.data;
};

// 구매완료 - 상세 조회 API
export const getSoldDetail = async (
	productId: string,
): Promise<ApiSoldDetail> => {
	const res: AxiosResponse<ApiSoldDetail> = await instanceTest.get(
		`/api/SoldDetail/${productId}`,
	);
	return res.data;
};

// 상품만료 - 상세 조회 API
export const getExpiredDetail = async (
	productId: string,
): Promise<ApiExpiredDetail> => {
	const res: AxiosResponse<ApiExpiredDetail> = await instanceTest.get(
		`/api/ExpiredDetail/${productId}`,
	);
	return res.data;
};
