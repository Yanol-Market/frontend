import { Navigate, useNavigate } from 'react-router-dom';
import instance from './axios';

export const addWish = async (productId: number) => {
	try {
		const res = await instance.post('/products/wish', {
			productId,
		});

		return res.data;
	} catch (error) {
		console.log('상품을 가져오지 못했습니다', error);
		return error
	}
};

export const deleteWish = async (productId: number) => {
	try {
		const res = await instance.delete(`/products/wish/${productId}`);

		return res.data;
	} catch (error) {
		console.log('상품을 가져오지 못했습니다', error);
		return error
	}
};
