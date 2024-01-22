import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';
import { useNavigate } from 'react-router-dom';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import MyPageClickBtn from '../btn/MyPageClickBtn';
import { bankLogoData } from '../../../../data/bankLogoData';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteAccounts } from '../../../../apis/deleteAccounts';
import NotFoundContent from '../content/NotFoundContent';
import { getAccounts } from '../../../../apis/getAccounts';
import { getCookie } from '../../../../apis/cookie';

const MyAccount = () => {
	const navigate = useNavigate();
	const accessToken = getCookie('accessToken');
	const { data } = useQuery({
		queryKey: ['getAccounts'],
		queryFn: getAccounts,
		enabled: !!accessToken,
	});

	const mutation = useMutation({
		mutationFn: deleteAccounts,
		onSuccess() {
			navigate('/myaccount');
		},
	});

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

	const handleRemoveAccounts = () => {
		mutation.mutate({
			bankName: data?.data?.bankName || '',
			accountNumber: data?.data?.accountNumber || '',
		});
	};

	return (
		<div>
			{data?.data.bankName && data?.data.accountNumber ? (
				<>
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
							rightBtnFunc={handleRemoveAccounts}
						/>
					</BottomSheet>
					<div className="w-full flex flex-col items-center">
						<div className="w-[90%]">
							<div className="border border-main h-28 flex flex-col mt-9 mb-44 p-4 bg-bgMain rounded-xl">
								<p className="text-body font-bold mb-3">{data?.data?.name}</p>
								<div className="flex flex-row gap-2">
									<img
										className="w-4 h-4"
										src={
											bankLogoData[
												data?.data.bankName as keyof typeof bankLogoData
											]
										}
										alt="선택한 은행"
									/>
									<span className="text-m">{data?.data.bankName}</span>
								</div>
								<div className="flex flex-row justify-between">
									<p className="text-lg">{data?.data.accountNumber}</p>
									<img
										className="cursor-pointer"
										src="/assets/images/trashCan.svg"
										alt="쓰레기통"
										onClick={openBottomSheetAccount}
									/>
								</div>
							</div>
						</div>
						<MyPageClickBtn content="계좌 등록하기" isDisabled={true} />
					</div>{' '}
				</>
			) : (
				<>
					<NotFoundContent
						title="내 계좌"
						content="이용 가능한 계좌가 없습니다."
					>
						<MyPageClickBtn
							content="계좌 등록하기"
							onClick={addAccountBtn}
							isDisabled={false}
						/>
					</NotFoundContent>
				</>
			)}
		</div>
	);
};

export default MyAccount;
