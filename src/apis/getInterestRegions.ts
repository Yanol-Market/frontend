import instance from './axios';

export const getInterestRegions = async () => {
	try {
		const res = await instance.get('/users/regions');
		if (res) {
			return res.data;
		}
	} catch (err) {
		console.error(err);
		throw new Error('관심 지역 목록 조회 실패');
	}
};
