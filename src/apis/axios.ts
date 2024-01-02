import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000', // headers 추가 예정
});

export default instance;
