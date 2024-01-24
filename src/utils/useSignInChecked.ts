/**
 * @description 토큰 체크 여부를 통해 토큰이 없으면 로그인 창으로 가게 해줍니다! 사용하시는 컴포넌트 최상단에 선언해주시면 됩니다!
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../apis/cookie';

const useSignInChecked = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (!accessToken) {
			navigate('/signin');
		}
	}, []);

	return null;
};

export default useSignInChecked;
