import React from 'react';
import { Link } from 'react-router-dom';

const AfterSignInMyPage = () => {
	return (
		<div className="flex flex-col items-center w-full h-screen text-center">
			<div className="mt-8 font-medium">마이페이지</div>
			<div className="mt-11 text-start w-[90%] text-descGray">
				<div className="flex flex-row gap-6">
					<img
						className="rounded-full text-descGray w-16 h-16"
						src="/assets/images/profileImage.svg"
					/>
					<div className="mt-2 text-descGray flex flex-col">
						<p className="text-headline2 text-black font-semibold">홍길동</p>
						<div className="flex flex-row gap-1">
							<span className="text-body">프로필 수정</span>
							<Link to="/mypage/editprofile">
								<img
									className="cursor-pointer w-4 h-4 mt-1"
									src="/assets/images/rightArrow.svg"
									alt="프로필 수정"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="border border-borderWhite bg-borderWhite w-full h-2 mt-5"></div>
			<div className="w-[90%] mt-5 flex flex-col">
				<div className="flex flex-row justify-between mb-2">
					<span className="font-semibold text-lg">MY</span>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>판매내역</span>
					<Link to="/sales">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>구매내역</span>
					<Link to="/purchase">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>찜한 상품</span>
					<Link to="/mypage/wishes">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>관심지역</span>
					<Link to="/mypage/mylocations">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between mt-1 mb-1">
					<span className="font-semibold text-lg">관리</span>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>내 계좌</span>
					<Link to="/myaccount">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between mb-5">
					<span>계정관리</span>
					<Link to="/member">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between mt-1 mb-1">
					<span className="font-semibold text-lg">서비스</span>
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
					<span>이용가이드</span>
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
					<Link to="/mypage/guide">
						<img
							className="cursor-pointer mt-1"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AfterSignInMyPage;
