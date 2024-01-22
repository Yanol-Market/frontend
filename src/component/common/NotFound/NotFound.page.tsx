import React from 'react';
import MyPageClickBtn from '../../../pages/mypage/component/btn/MyPageClickBtn';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
	const navigate = useNavigate();
	const handleHomeBtn = () => {
		navigate('/');
	};
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<img className="w-28" src="/assets/images/notFound.svg" alt="NotFound" />
			<p className="mt-6 text-body text-black font-semibold">
				요청하신 페이지를 찾을 수 없습니다.
			</p>
			<p className="mt-6 text-lg text-descGray">
				페이지의 주소를 잘못 입력 하셨거나, <br /> 주소가 변경 혹은 삭제
				되었습니다.
			</p>
			<MyPageClickBtn content="홈으로 가기" onClick={handleHomeBtn} />
		</div>
	);
};

export default NotFoundPage;
