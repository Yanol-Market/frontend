import { instanceTest } from './axios';

export const getAccounts = async () => {
	try {
		const res = await instanceTest('api/account');
		if (res) {
			return res.data;
		}
	} catch (err) {
		console.error('계좌 불러오기 실패');
		throw new Error('계좌 불러오기 실패');
	}
};
