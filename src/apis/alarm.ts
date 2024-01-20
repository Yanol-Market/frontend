import { AlertListRes, CheckNewAlertRes } from '../type/alarm';
import instance from './axios';

export const getAlarm = async () => {
	const res = await instance.get<AlertListRes>('/alerts');
	return res.data;
};

export const getNewAlarm = async () => {
	const res = await instance.get<CheckNewAlertRes>('/alerts/unseen');
	return res.data;
};
