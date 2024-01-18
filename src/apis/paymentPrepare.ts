import instance from './axios';

export const paymentPrePare = async (orderId: number) => {
	try {
		const res = await instance.post(`/payments/${orderId}/prepare`);
		// response body로 숙소 내역을 전달 받아서 검증 해줬습니다.
		if (res) {
			return res.data;
		}
	} catch (err) {
		console.error(err);
		throw new Error('사전검증 실패');
	}
};
