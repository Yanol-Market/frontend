import { Cookies } from 'react-cookie';

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
