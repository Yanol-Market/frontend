import instance from './axios';

export const getReservations = async (yaUserId: string) => {
	try {
		const res = await instance.get(`products/reservations/${yaUserId}`);
		if (res) {
			return res.data;
		}
	} catch (err) {
		console.error(err);
		throw new Error('예약 목록 조회 실패');
	}
};
