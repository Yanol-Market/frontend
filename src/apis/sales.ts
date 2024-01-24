import {
	ApiExpiredDetail,
	ApiSales,
	ApiSold,
	ApiSoldDetail,
} from '../data/salesData';
import instance, { instanceTest } from './axios';
import { AxiosResponse } from 'axios';

// 판매내역-판매중 조회 API
export const getSales = async (): Promise<ApiSales> => {
	const res: AxiosResponse<ApiSales> = await instance.get(
		'/products/history/progress',
	);
	return res.data;
};

// 판매완료 - 리스트 조회 API
export const getSoldList = async (): Promise<ApiSold> => {
	const res: AxiosResponse<ApiSold> = await instance.get(
		'/products/history/completed',
	);
	return res.data;
};

// 판매완료 - 상세 조회 API
// 테스트 못해봄
export const getSoldDetail = async (
	productId: string,
	productStatus: string,
): Promise<ApiSoldDetail> => {
	const res: AxiosResponse<ApiSoldDetail> = await instance.get(
		`/products/history/completed/${productId}?productStatus=${productStatus}
		`,
	);
	return res.data;
};

// 상품만료 - 상세 조회 API
export const getExpiredDetail = async (
	productId: string,
	productStatus: string,
): Promise<ApiExpiredDetail> => {
	const res: AxiosResponse<ApiExpiredDetail> = await instance.get(
		`/products/history/completed/${productId}?productStatus=${productStatus}
		`,
	);
	return res.data;
};

// 판매 내역 - 판매완료 - 삭제
export const delSoldProd = async (productId: number) => {
	const res = await instance.delete(`/products/history/completed/${productId}`);
	return res.data;
};
