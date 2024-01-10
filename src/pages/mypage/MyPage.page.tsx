import React from 'react';
import AfterSignInMyPage from './component/signIn/AfterSignInMyPage';
import BeforeSignInMyPage from './component/signIn/BeforeSignInMyPage';

const MyPage = () => {
	const accessToken = sessionStorage.getItem('accessToken'); // 추후 변경 예정
	return accessToken ? <AfterSignInMyPage /> : <BeforeSignInMyPage />;
};

export default MyPage;
