import React from 'react';
export default function AfterSignInMyPage() {
	return (
		<div className="flex flex-col items-center w-full text-center">
			<div className="mt-8">마이페이지</div>
			<div className="mt-11 text-start w-[90%] text-[#828282]">
				<div className="flex flex-row gap-6">
					<div className="border rounded-full bg-[#828282] text-[#828282] w-16 h-16" />
					<div className="mt-2 text-[#828282] flex flex-col">
						<p className="text-headline2 text-black">홍길동</p>
						<div className="flex flex-row gap-1">
							<span>프로필 수정</span>
							<img
								className="cursor-pointer"
								src="/assets/images/rightArrow.svg"
								alt="로그인 가기"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="border border-[#F5F5F5] bg-[#F5F5F5] w-full h-2 mt-5"></div>
			<div className="w-[90%] mt-5 flex flex-col">
				<div className="flex flex-row justify-between mb-5">
					<span>내 계좌</span>
					<img
						className="cursor-pointer"
						src="/assets/images/rightArrowTab.svg"
						alt="탭 이동"
					/>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>찜한 상품</span>
					<img
						className="cursor-pointer"
						src="/assets/images/rightArrowTab.svg"
						alt="탭 이동"
					/>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>설정</span>
					<img
						className="cursor-pointer"
						src="/assets/images/rightArrowTab.svg"
						alt="탭 이동"
					/>
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
}
