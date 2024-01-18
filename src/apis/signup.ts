import instance from './axios';

export interface SignUpProps {
	name: string;
	nickname: string;
	email: string;
	password: string;
	phoneNumber: string;
	agreement: {
		isMarketing: boolean;
	};
}

export const getSignUp = async (data: SignUpProps) => {
	try {
		const res = await instance.post('/users', data);
		alert('회원가입 성공');
		return res.data;
	} catch (err) {
		console.error('회원가입 실패', err);
		throw new Error('회원가입 실패');
	}
};
