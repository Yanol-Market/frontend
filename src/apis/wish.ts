import { Navigate, useNavigate } from 'react-router-dom';
import instance from './axios';

export const addWish = async (productId: number) => {
	try {
		const res = await instance.post('/products/wish', {
			productId,
		});

		return res.data;
	} catch (error) {
		return error;
	}
};

export const deleteWish = async (productId: number) => {
	try {
		const res = await instance.delete(`/products/wish/${productId}`);

		return res.data;
	} catch (error) {
		return error;
	}
};
