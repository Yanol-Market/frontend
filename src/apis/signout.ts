import Swal from 'sweetalert2';
import instance from './axios';
import { deleteCookie } from './cookie';

export interface SignOutProps {
	accessToken: string;
	refreshToken: string;
}

export const getSignOut = async (data: SignOutProps) => {
	try {
		const res = await instance.delete('/logout', {
			data: {
				accessToken: data.accessToken,
				refreshToken: data.refreshToken,
			},
		});
		if (res.status === 200) {
			deleteCookie();
			Swal.fire({
				title: '로그아웃 성공',
				icon: 'success',
			});
		} else {
			console.error('로그아웃 실패');
		}
	} catch (err) {
		console.error('로그아웃 요청 실패', err);
		throw new Error('로그아웃 요청 실패');
	}
};
