import React from 'react';
import AfterSignInMyPage from './component/SignIn/AfterSignInMyPage';
import BeforeSignInMyPage from './component/SignIn/BeforeSignInMyPage';

const MyPage = () => {
	const accessToken = sessionStorage.getItem('accessToken'); // 추후 변경 예정
	return accessToken ? <AfterSignInMyPage /> : <BeforeSignInMyPage />;
};

export default MyPage;
