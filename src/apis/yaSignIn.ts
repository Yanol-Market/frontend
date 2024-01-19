import instance from './axios';
import { SignInProps } from './signin';

export const getYaSignIn = async (data: SignInProps) => {
	try {
		const res = await instance.post('/yanolja-login', data);
		return res.data;
	} catch (err) {
		console.error('로그인 실패', err);
		throw new Error('로그인 실패');
	}
};
