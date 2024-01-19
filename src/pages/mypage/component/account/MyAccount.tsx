import React, { useEffect, useState } from 'react';
import { Header } from '../../../../component/common/Header';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';
import { useNavigate } from 'react-router-dom';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { useRecoilValue } from 'recoil';
import { myAccountState } from '../../../../recoil/atom';
import MyPageClickBtn from '../btn/MyPageClickBtn';
import { bankLogoData } from '../../../../data/bankLogoData';

const MyAccount = () => {
	const navigate = useNavigate();
	const myAccount = useRecoilValue(myAccountState);

	const [isBottomSheetAccountOpen, setIsBottomSheetAccountOpen] =
		useState(false);

	const openBottomSheetAccount = () => {
		setIsBottomSheetAccountOpen(true);
	};

	const closeBottomSheetAccount = () => {
		setIsBottomSheetAccountOpen(false);
	};

	const addAccountBtn = () => {
		navigate('/myaccount/registration');
	};

	const removeAccountBtn = () => {
		alert('계좌 삭제 완료');
		navigate('/mypage');
	};

	return (
		<div>
			<Header title="내 계좌" />
			<BottomSheet
				isOpen={isBottomSheetAccountOpen}
				onClose={closeBottomSheetAccount}
				viewHeight="calc(100vh * 0.25)"
			>
				<ContentTwoBtnPage
					title="계좌를 삭제하시겠습니까?"
					leftBtn="아니오"
					rightBtn="네"
					leftBtnFunc={closeBottomSheetAccount}
					rightBtnFunc={removeAccountBtn}
				/>
			</BottomSheet>
			<div className="w-full flex flex-col items-center">
				<div className="w-[90%]">
					<div className="border border-main h-28 flex flex-col mt-9 mb-44 p-4 bg-bgMain rounded-xl">
						<p className="text-body font-bold mb-3">{myAccount?.name}</p>
						<div className="flex flex-row gap-2">
							<img
								className="w-4 h-4"
								src={
									bankLogoData[
										myAccount?.bank_name as keyof typeof bankLogoData
									]
								}
								alt="선택한 은행"
							/>
							<span className="text-m">{myAccount?.bank_name}</span>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">{myAccount?.account_number}</p>
							<img
								className="cursor-pointer"
								src="/assets/images/trashCan.svg"
								alt="쓰레기통"
								onClick={openBottomSheetAccount}
							/>
						</div>
					</div>
				</div>
				<MyPageClickBtn content="계좌 등록하기" onClick={addAccountBtn} />
			</div>
		</div>
	);
};

export default MyAccount;
