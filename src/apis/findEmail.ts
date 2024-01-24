import { instanceNoToken } from './axios';

export interface FindEmailProps {
	email: string;
}
export const findEmail = async (data: FindEmailProps) => {
	try {
		const res = await instanceNoToken.post('/users/reset-password', data);
	} catch (err) {
		console.error(err);
		throw new Error('비밀번호 찾기 실패');
	}
};
