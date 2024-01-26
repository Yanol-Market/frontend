import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import { useNavigate } from 'react-router-dom';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { getCookie } from '../../../../apis/cookie';
import { useMutation } from '@tanstack/react-query';
import { getSignOut } from '../../../../apis/signout';
import Swal from 'sweetalert2';
const ManageAccount = () => {
	const navigate = useNavigate();
	const [isBottomSheetSignOutOpen, setIsBottomSheetSignOutOpen] =
		useState(false);

	const mutation = useMutation({
		mutationFn: getSignOut,
		onSuccess() {
			const userProfileInfo = localStorage.getItem('userProfileInfo');
			if (userProfileInfo) {
				localStorage.removeItem('userProfileInfo');
			}
			navigate('/signin');
		},
		onError(err) {
			alert('로그아웃 실패');
		},
	});

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
		const accessToken = getCookie('accessToken');
		const refreshToken = getCookie('refreshToken');

		mutation.mutate({ accessToken, refreshToken });
	};
	return (
		<div>
			<Header title="계정 관리" />
			<BottomSheet
				isOpen={isBottomSheetSignOutOpen}
				onClose={closeBottomSheetSignOut}
				viewHeight="calc(100vh * 0.31)"
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
					<div
						className="flex flex-row justify-between mb-5 cursor-pointer"
						onClick={editPasswordBtn}
					>
						<span>비밀번호 변경</span>
						<img src="/assets/images/rightArrowTab.svg" alt="탭 이동" />
					</div>
					<div
						className="flex flex-row justify-between mb-5 cursor-pointer"
						onClick={openBottomSheetSignOut}
					>
						<span>로그아웃</span>
						<img src="/assets/images/rightArrowTab.svg" alt="탭 이동" />
					</div>
					<div
						className="flex flex-row justify-between mb-5 cursor-pointer"
						onClick={withdrawlBtn}
					>
						<span>회원탈퇴</span>
						<img src="/assets/images/rightArrowTab.svg" alt="탭 이동" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageAccount;
