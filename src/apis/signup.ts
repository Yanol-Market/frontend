import instance from './axios';

export const getSignUp = async (data: any) => {
	try {
		const res = await instance.post('/api/signup', data);

		alert('회원가입 성공');
		console.log(res.data);
	} catch (err) {
		console.error('회원가입 실패', err);
		throw new Error('회원가입 실패');
	}
};
