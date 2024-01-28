import instance from './axios';

export const paymentPrePare = async (orderId: number) => {
	try {
		const res = await instance.post(`/payments/${orderId}/prepare`);
		if (res) {
			return res.data;
		}
	} catch (err) {
		console.error(err);
		throw new Error('사전검증 실패');
	}
};
