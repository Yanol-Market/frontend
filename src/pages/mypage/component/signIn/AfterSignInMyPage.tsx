import React from 'react';
import { Link } from 'react-router-dom';

const AfterSignInMyPage = () => {
	const myProfileJSON = localStorage.getItem('userProfileInfo');
	const myProfile = JSON.parse(myProfileJSON as string);
	return (
		<div className="flex flex-col items-center w-full h-screen text-center">
			<div className="mt-8 font-medium cursor-default">마이페이지</div>
			<div className="mt-11 text-start w-[90%] text-descGray">
				<div className="flex flex-row gap-6">
					<img
						className="rounded-full text-descGray w-16 h-16"
						src="/assets/images/profileImage.svg"
					/>
					<div className="mt-2 text-descGray flex flex-col">
						<p className="text-headline2 text-black font-semibold cursor-default">
							{myProfile.data.nickname}
						</p>
						<Link to="/mypage/editprofile">
							<div className="flex flex-row gap-1">
								<span className="text-body">프로필 수정</span>

								<img
									className="cursor-pointer w-4 h-4 mt-1"
									src="/assets/images/rightArrow.svg"
									alt="프로필 수정"
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="border border-borderWhite bg-borderWhite w-full h-2 mt-5"></div>
			<div className="w-[90%] mt-5 flex flex-col">
				<div className="flex flex-row justify-between mb-2">
					<span className="font-semibold text-lg cursor-default">MY</span>
				</div>
				<Link to="/sales">
					<div className="flex flex-row justify-between mb-5">
						<span>판매내역</span>

						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
				<Link to="/purchase">
					<div className="flex flex-row justify-between mb-5">
						<span>구매내역</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
				<Link to="/mypage/wishes">
					<div className="flex flex-row justify-between mb-5">
						<span>찜한 상품</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
				<Link to="/mypage/mylocations">
					<div className="flex flex-row justify-between mb-5">
						<span>관심지역</span>

						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
				<div className="flex flex-row justify-between mt-1 mb-1">
					<span className="font-semibold text-lg cursor-default">관리</span>
				</div>
				<Link to="/myaccount">
					<div className="flex flex-row justify-between mb-5">
						<span>내 계좌</span>

						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
				<Link to="/member">
					<div className="flex flex-row justify-between mb-5">
						<span>계정관리</span>

						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
				<div className="flex flex-row justify-between mt-1 mb-1">
					<span className="font-semibold text-lg cursor-default">서비스</span>
				</div>
				<Link to="/mypage/announcement">
					<div className="flex flex-row justify-between mb-5">
						<span>공지사항</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
				<Link to="/mypage/profilepolicies">
					<div className="flex flex-row justify-between mb-5">
						<span>개인정보 처리방침</span>

						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
				<Link to="/mypage/service">
					<div className="flex flex-row justify-between">
						<span>서비스 이용약관 및 정책</span>

						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AfterSignInMyPage;
