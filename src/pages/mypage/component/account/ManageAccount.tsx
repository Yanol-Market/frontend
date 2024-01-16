import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import { useNavigate } from 'react-router-dom';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { deleteCookie } from '../../../../apis/cookie';

const ManageAccount = () => {
	const navigate = useNavigate();
	const [isBottomSheetSignOutOpen, setIsBottomSheetSignOutOpen] =
		useState(false);

	const openBottomSheetSignOut = () => {
		setIsBottomSheetSignOutOpen(true);
	};

	const closeBottomSheetSignOut = () => {
		setIsBottomSheetSignOutOpen(false);
	};

	const editPasswordBtn = () => {
		navigate('/member/editpassword');
	};

	const withdrawlBtn = () => {
		navigate('/member/withdrawl');
	};

	const signOutBtn = () => {
		deleteCookie();
		alert('로그아웃 완료');
		navigate('/');
	};
	return (
		<div>
			<Header title="계정 관리" />
			<BottomSheet
				isOpen={isBottomSheetSignOutOpen}
				onClose={closeBottomSheetSignOut}
				viewHeight="calc(100vh * 0.25)"
			>
				<ContentTwoBtnPage
					title="로그아웃 하시겠습니까?"
					leftBtn="아니오"
					rightBtn="네"
					leftBtnFunc={closeBottomSheetSignOut}
					rightBtnFunc={signOutBtn}
				/>
			</BottomSheet>
			<div className="w-full flex flex-col items-center">
				<div className="w-[90%] mt-5 flex flex-col">
					<div className="flex flex-row justify-between mb-5">
						<span>비밀번호 변경</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
							onClick={editPasswordBtn}
						/>
					</div>
					<div className="flex flex-row justify-between mb-5">
						<span>로그아웃</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
							onClick={openBottomSheetSignOut}
						/>
					</div>
					<div className="flex flex-row justify-between mb-5">
						<span>회원탈퇴</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
							onClick={withdrawlBtn}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageAccount;
