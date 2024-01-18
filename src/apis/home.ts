import axios from 'axios';
import instance from './axios';

export const getProducts = async () => {
	try {
		const res = await axios.get('http://localhost:3000/api/products');
		console.log(res.data);
		return res.data;
	} catch (error) {
		console.log('상품을 가져오지 못했습니다', error);
	}
};
