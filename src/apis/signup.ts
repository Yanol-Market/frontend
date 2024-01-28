import Swal from 'sweetalert2';
import instance, { instanceNoToken } from './axios';

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
		const res = await instanceNoToken.post('/users', data);
		Swal.fire({
			title: '회원가입 성공',
			icon: 'success',
		});
		return res.data;
	} catch (err) {
		console.error('회원가입 실패', err);
		throw new Error('회원가입 실패');
	}
};
