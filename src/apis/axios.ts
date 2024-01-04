import axios from 'axios';
import { getCookie } from './cookie';

const instance = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.request.use((config) => {
	const accessToken = getCookie('accessToken');
	if (accessToken) {
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	}

	return config;
});

// instance.interceptors.response.use((res) => {

// })

export default instance;
