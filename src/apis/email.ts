import instance from './axios';

export interface getEmailProps {
	email: string;
}

export const getEmail = async (email: getEmailProps) => {
	try {
		const res = await instance.get(`/users/check/email?email=${email}`);
		return res.data;
	} catch (err) {
		console.error('이메일 중복 조회에 실패 했습니다.', err);
		throw new Error('이메일 중복 조회 실패');
	}
};
