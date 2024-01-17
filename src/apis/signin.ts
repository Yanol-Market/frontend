import instance from './axios';
export interface SignInProps {
	email: string;
	password: string;
}
export const getSignIn = async (data: SignInProps) => {
	try {
		const res = await instance.post('/login', data);
		return res.data;
	} catch (err) {
		console.error('로그인 실패', err);
		throw new Error('로그인 실패');
	}
};
