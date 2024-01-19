import React from 'react';
import { HomeHeader } from './component/HomeHeader/HomeHeader';
import { HomeContent } from './component/HomeContent';
import { getCookie } from '../../apis/cookie';
import { useQuery } from '@tanstack/react-query';
import { getProfiles } from '../../apis/getProfile';

export default function Main() {
	const accessToken = getCookie('accessToken');
	if (accessToken) {
		const { data } = useQuery({
			queryKey: ['getMyProfile'],
			queryFn: getProfiles,
		});
		if (data) {
			const userProfileInfo = localStorage.setItem(
				'userProfileInfo',
				JSON.stringify(data),
			);
		}
	}
	return (
		<>
			<HomeHeader />
			<HomeContent />
		</>
	);
}
