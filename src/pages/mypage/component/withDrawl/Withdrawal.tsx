import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';
import WithdrawlReasons from './WithdrawlReasons';
import { useNavigate } from 'react-router-dom';
import MyPageClickBtn from '../btn/MyPageClickBtn';
import { useRecoilValue } from 'recoil';
import { withDrawlState } from '../../../../recoil/atom';
import { useMutation } from '@tanstack/react-query';
import { deleteMember } from '../../../../apis/deleteMember';
import { deleteCookie } from '../../../../apis/cookie';

const Withdrawl = () => {
	const navigate = useNavigate();
	const selectReason = useRecoilValue(withDrawlState);
	const [isBottomSheetOpenWithDrawl, setIsBottomSheetWithDrawlOpen] =
		useState(false);
	const isButtonDisabled = !selectReason;
	const mutation = useMutation({
		mutationFn: deleteMember,
		onSuccess() {
			deleteCookie();
			navigate('/member/withdrawl/confirm');
		},
	});
	const openBottomSheetWithDrawl = () => {
		setIsBottomSheetWithDrawlOpen(true);
	};

	const closeBottomSheetWithDrawl = () => {
		setIsBottomSheetWithDrawlOpen(false);
	};

	const withdrawlConfirmBtn = () => {
		mutation.mutate({ reason: String(selectReason) });
	};
	return (
		<div>
			<Header title="회원탈퇴" />
			<div className="flex flex-col items-center">
				<BottomSheet
					isOpen={isBottomSheetOpenWithDrawl}
					onClose={closeBottomSheetWithDrawl}
					viewHeight="calc(100vh * 0.45)"
				>
					<WithdrawlReasons closeFunc={closeBottomSheetWithDrawl} />
				</BottomSheet>
				<div className="w-[90%] mx-auto mt-11 font-body font-medium text-descGray">
					<p>서비스에 만족을 드리지 못해</p>
					<p>대단히 죄송합니다.</p>
				</div>
				<div className="w-[90%] mx-auto mt-8 font-body font-medium text-descGray">
					<p>탈퇴 사유를 남겨주시면 서비스 개선에</p>
					<p>더욱 힘쓰겠습니다.</p>
				</div>

				<div className="w-[90%] mt-7">
					<div className="flex flex-row justify-between font-bold">
						<p className="text-lg">탈퇴 사유를 선택해주세요.</p>
					</div>
					<div
						className="flex flex-row justify-between rounded-lg bg-lightGray mx-auto mt-5 mb-40 p-3 text-gray cursor-pointer"
						onClick={openBottomSheetWithDrawl}
					>
						{selectReason ? <p>{selectReason}</p> : <p>탈퇴 사유 선택</p>}
						<img src="/assets/images/dropdownArrow.svg" alt="아래로 이동" />
					</div>
				</div>
				<MyPageClickBtn
					content="탈퇴하기"
					onClick={withdrawlConfirmBtn}
					isDisabled={isButtonDisabled}
				/>
			</div>
		</div>
	);
};

export default Withdrawl;
