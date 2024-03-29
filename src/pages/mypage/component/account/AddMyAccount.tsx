import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from '../../../../component/common/Header';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';

import SelectBanks from '../region/SelectBanks';
import { useRecoilValue } from 'recoil';
import { checkedBankState, myAccountState } from '../../../../recoil/atom';
import MyPageClickBtn from '../btn/MyPageClickBtn';
import { useMutation } from '@tanstack/react-query';
import { patchAccounts } from '../../../../apis/patchAccounts';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddMyAccount = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });
	const myProfileJSON = localStorage.getItem('userProfileInfo');
	const myProfile = JSON.parse(myProfileJSON as string);
	const accountNumber = watch('addAccountNumber');
	const watchAgreeCheckBox = watch('account-checkbox');
	const selectedBank = useRecoilValue(checkedBankState);
	const isButtonDisabled =
		!watchAgreeCheckBox ||
		!selectedBank?.bankName ||
		!accountNumber ||
		(accountNumber && errors.addAccountNumber);

	const [isBottomSheetBankOpen, setIsBottomSheetBankOpen] = useState(false);

	const openBottomSheetBank = () => {
		setIsBottomSheetBankOpen(true);
	};

	const closeBottomSheetBank = () => {
		setIsBottomSheetBankOpen(false);
	};
	const navigate = useNavigate();
	const mutation = useMutation({
		mutationFn: patchAccounts,
		onSuccess(data) {
			Swal.fire({
				title: '계좌 등록 성공',
				icon: 'success',
			});
			navigate(-1);
		},
	});

	const handleAccount = () => {
		const bankName = selectedBank?.bankName;

		if (bankName && typeof bankName === 'string') {
			const data = {
				bankName: bankName,
				accountNumber: accountNumber,
			};

			mutation.mutate(data);
		}
	};

	return (
		<div>
			<Header title="계좌 등록" />
			<BottomSheet
				isOpen={isBottomSheetBankOpen}
				onClose={closeBottomSheetBank}
				viewHeight="calc(100vh * 0.9)"
			>
				<SelectBanks closeFunc={closeBottomSheetBank} />
			</BottomSheet>
			<div className="w-full flex flex-col items-center mt-11">
				<form className="w-[90%] text-start">
					<p>은행명과 계좌번호, 예금주를 입력해주세요.</p>
					<div className="mt-7">
						<div className="flex flex-row justify-between font-bold">
							<p className="text-lg">은행명</p>
						</div>
						<div
							className="flex flex-row justify-between rounded-lg bg-lightGray mx-auto mt-5 p-3 text-gray cursor-pointer"
							onClick={openBottomSheetBank}
						>
							{selectedBank ? (
								<div className="flex flex-row gap-2 cursor-default">
									<img
										className="w-8 h-8"
										src={selectedBank.image}
										alt="은행 이미지"
									/>
									<p className="mt-1 text-black">{selectedBank.bankName}</p>
								</div>
							) : (
								<p>은행을 선택해주세요.</p>
							)}

							<img src="/assets/images/dropdownArrow.svg" alt="아래로 이동" />
						</div>
					</div>
					<div className="mt-7">
						<div className="flex flex-row justify-between font-bold">
							<p className="text-lg">계좌번호</p>
						</div>
						<input
							className={`w-full h-11 rounded-xl text-lg mt-2 bg-lightGray pl-4 focus:outline-none ${
								accountNumber && errors.addAccountNumber
									? 'border border-red'
									: ''
							}`}
							type="text"
							placeholder="계좌 번호를 입력해주세요."
							{...register('addAccountNumber', {
								required: true,
								pattern: {
									value: /^[0-9]*$/,
									message: '특수문자 제외, 숫자만 입력해주세요',
								},
							})}
						/>
					</div>
					{errors.addAccountNumber && (
						<div className="text-sm text-red mb-2 text-start">
							{errors.addAccountNumber.message as string}
						</div>
					)}
					<div className="mt-7">
						<div className="flex flex-row justify-between font-bold">
							<p className="text-lg">예금주</p>
						</div>
						<div className="w-full h-11 rounded-xl text-botton mt-2 bg-lightGray pl-4 focus:outline-none">
							<p className="pt-2 text-start text-gray">{myProfile.data.name}</p>
						</div>
					</div>

					<div className="absolute bottom-24 flex flex-row">
						<input
							className="appearance-none bg-[url('pages/signUp/component/unchecked.svg')] w-4 h-4 mr-1 checked:bg-[url('pages/signUp/component/checked.svg')] cursor-pointer"
							type="checkbox"
							id="account-checkbox"
							{...register('account-checkbox', { required: true })}
						/>
						<label htmlFor="account-checkbox" className="text-sm text-gray">
							<span>
								계좌인증을 위한 <u className="cursor-pointer">이용약관</u> 및{' '}
								<u className="cursor-pointer">개인정보 처리방침</u>에
								동의합니다.
							</span>
						</label>
					</div>
					<MyPageClickBtn
						content="계좌 등록하기"
						onClick={handleAccount}
						isDisabled={isButtonDisabled}
					/>
				</form>
			</div>
		</div>
	);
};

export default AddMyAccount;
