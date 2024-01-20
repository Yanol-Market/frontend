import { AlertListRes } from '../type/alarm';
import instance from './axios';

export const getAlarm = async () => {
	const res = await instance.get<AlertListRes>('/alerts');
	return res.data;
};
