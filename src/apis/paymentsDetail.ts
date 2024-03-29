import instance from './axios';

export const getPaymentsDetail = async (productId: string | undefined) => {
	try {
		const res = await instance.get(`/payments/${productId}`);
		if (res) {
			return res.data;
		}
	} catch (err) {
		console.error(err);
		throw new Error('결제 상품 조회 실패');
	}
};
