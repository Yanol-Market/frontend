import React from 'react';
import { HomeHeader } from './component/HomeHeader/HomeHeader';
import { HomeContent } from './component/HomeContent';
import { getCookie } from '../../apis/cookie';
import { isTokenExpired } from '../../utils/tokenExpireCheck';

export default function Main() {
	const accessToken = getCookie('accessToken');
	const isExpired = isTokenExpired(accessToken);
	if (isExpired) {
		console.log('토큰이 만료되었습니다');
	} else {
		console.log('토큰이 유효합니다');
	}
	return (
		<>
			<HomeHeader />
			<HomeContent />
		</>
	);
}
