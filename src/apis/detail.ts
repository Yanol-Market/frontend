import instance from './axios';

export const getProduct = async (productId: string | undefined | null) => {
	try {
		const res = await instance.get(`/products/${productId}`);
		return res.data;
	} catch (error) {
		console.log('상품을 가져오지 못했습니다', error);
	}
};
