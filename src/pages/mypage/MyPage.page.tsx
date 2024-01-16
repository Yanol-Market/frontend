import React from 'react';

import AfterSignInMyPage from './component/signIn/AfterSignInMyPage';
import BeforeSignInMyPage from './component/signIn/BeforeSignInMyPage';
import { getCookie } from '../../apis/cookie';

const MyPage = () => {
	const accessToken = getCookie('accessToken');
	return accessToken ? <AfterSignInMyPage /> : <BeforeSignInMyPage />;
};

export default MyPage;
