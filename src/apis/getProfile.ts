import { instanceTest } from './axios';

export const getProfiles = async () => {
	try {
		const res = await instanceTest('api/me');
		if (res) {
			return res.data;
		}
	} catch (err) {
		throw new Error('내 정보 가져오기 실패');
	}
};
