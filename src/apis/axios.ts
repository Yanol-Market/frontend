import axios from 'axios';
import { getCookie } from './cookie';

/**
 * @param instance 실제 api 연결 시 사용되는 instance입니다.
 * @param instanceTest msw 전용 테스트 instance입니다!
 */
export const instanceTest = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const instance = axios.create({
	baseURL: 'https://golden-ticket.site',
	headers: {
		'Content-Type': 'application/json',
	},
});
instanceTest.interceptors.request.use((config) => {
	const accessToken = getCookie('accessToken');
	if (accessToken) {
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	}

	return config;
});

instance.interceptors.request.use((config) => {
	const accessToken = getCookie('accessToken');
	if (accessToken) {
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	}

	return config;
});
