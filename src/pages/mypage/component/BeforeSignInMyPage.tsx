import React from 'react';
const BeforeSignInMyPage = () => {
	return (
		<div className="flex flex-col items-center w-full h-[100vh] text-center">
			<div className="mt-8">마이페이지</div>
			<div className="mt-11 text-start w-[90%] text-[#828282] text-body">
				<p>로그인하고</p>
				<p>
					간편하고 안전한 <span className="text-main">골든티켓</span>{' '}
					이용해보세요!
				</p>
				<div className="mt-2 text-headline2 text-black flex flex-row gap-1 h-6">
					<span>로그인 하기</span>
					<img
						className="cursor-pointer mt-1 h-5"
						src="/assets/images/rightArrow.svg"
						alt="로그인 가기"
					/>
				</div>
			</div>
			<div className="border border-[#F5F5F5] bg-[#F5F5F5] w-full h-2 mt-5"></div>
			<div className="w-[90%] mt-5 flex flex-col text-lg">
				<div className="flex flex-row justify-between mb-1">
					<span className="font-semibold">서비스</span>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>공지사항</span>
					<img
						className="cursor-pointer"
						src="/assets/images/rightArrowTab.svg"
						alt="탭 이동"
					/>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>이용가이드</span>
					<img
						className="cursor-pointer"
						src="/assets/images/rightArrowTab.svg"
						alt="탭 이동"
					/>
				</div>
				<div className="flex flex-row justify-between">
					<span>서비스 이용약관 및 정책</span>
					<img
						className="cursor-pointer"
						src="/assets/images/rightArrowTab.svg"
						alt="탭 이동"
					/>
				</div>
			</div>
		</div>
	);
};

export default BeforeSignInMyPage;
