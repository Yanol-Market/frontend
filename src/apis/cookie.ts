import { Cookies } from 'react-cookie';
import instance from './axios';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: object) => {
	return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
	return cookies.get(name);
};

export const deleteCookie = () => {
	const accessToken = getCookie('accessToken');
	const refreshToken = getCookie('refreshToken');

	setCookie('refreshToken', refreshToken, {
		path: '/',
		secure: '/',
		maxAge: 0,
	});

	setCookie('accessToken', accessToken, {
		path: '/',
		secure: '/',
		maxAge: 0,
	});
};

export const refreshCookie = async () => {
	try {
		const accessTokenValue = getCookie('accessToken');
		const refreshTokenValue = getCookie('refreshToken');
		console.log('기존 액세스 토큰 :', accessTokenValue);
		console.log('기존 리프레쉬 토큰 :', refreshTokenValue);
		if (refreshTokenValue) {
			const res = await instance.post('/reissue', {
				refreshToken: refreshTokenValue,
			});
			if (res) {
				const { accessToken, refreshToken } = res.data.data;
				setCookie('accessToken', accessToken);
				setCookie('refreshToken', refreshToken);
				console.log('새 토큰', accessToken);
				const newAccessToken = getCookie('accessToken');
				const equal = accessTokenValue === newAccessToken;
				console.log(equal);
				return accessToken;
			}
		}
	} catch (err) {
		console.error('토큰 재발급 실패', err);
	}
};
