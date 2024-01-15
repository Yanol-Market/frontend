import axios from 'axios';
import { getCookie } from './cookie';

const instance = axios.create({
	baseURL: 'https://golden-ticket.site',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'http://localhost:3000',
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
