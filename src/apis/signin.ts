import instance from './axios';
export interface ISignIn {
	email: string;
	password: string;
}
export const getSignIn = async (data: ISignIn) => {
	try {
		const res = await instance.post('/api/login', data);
		if (res) {
			return res.data;
		}
	} catch (err) {
		console.error('로그인 실패', err);
		throw new Error('로그인 실패');
	}
};
