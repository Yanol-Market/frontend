import React from 'react';
import { Link } from 'react-router-dom';
const BeforeSignInMyPage = () => {
	return (
		<div className="flex flex-col items-center w-full h-screen text-center">
			<div className="mt-8">마이페이지</div>
			<div className="mt-11 text-start w-[90%] text-descGray text-body">
				<p>로그인하고</p>
				<p>
					간편하고 안전한 <span className="text-main">골든티켓</span>{' '}
					이용해보세요!
				</p>
				<div className="mt-2 text-headline2 text-black flex flex-row gap-1 h-6">
					<span>로그인 하기</span>
					<Link to="/signin">
						<img
							className="cursor-pointer mt-1 h-5"
							src="/assets/images/rightArrow.svg"
							alt="로그인 하기"
						/>
					</Link>
				</div>
			</div>
			<div className="border border-borderWhite bg-borderWhite w-full h-2 mt-5"></div>
			<div className="w-[90%] mt-5 flex flex-col text-lg">
				<div className="flex flex-row justify-between mb-2">
					<span className="font-semibold">서비스</span>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>공지사항</span>
					<Link to="/mypage/announcement">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>개인정보 처리방침</span>
					<Link to="/mypage/guide">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between">
					<span>서비스 이용약관 및 정책</span>
					<img
						className="cursor-pointer mt-1"
						src="/assets/images/rightArrowTab.svg"
						alt="탭 이동"
					/>
				</div>
			</div>
		</div>
	);
};

export default BeforeSignInMyPage;
