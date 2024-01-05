import instance from './axios';

export const getProducts = async () => {
	try {
		const res = await instance.get('/api/products');
		return res.data;
	} catch (error) {
		console.log('상품을 가져오지 못했습니다', error);
	}
};
