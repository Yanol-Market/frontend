import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';
import SelectBanks from '../region/SelectBanks';
import { useForm } from 'react-hook-form';

const AddMyAccount = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }, // isSubmitting, isDirty, isValid
	} = useForm({ mode: 'onChange' });
	const watchAgreeCheckBox = watch('account-checkbox');
	const isButtonDisabled = !watchAgreeCheckBox;
	const [isBottomSheetBankOpen, setIsBottomSheetBankOpen] = useState(false);

	const openBottomSheetBank = () => {
		setIsBottomSheetBankOpen(true);
	};

	const closeBottomSheetBank = () => {
		setIsBottomSheetBankOpen(false);
	};
	return (
		<div>
			<Header title="계좌 등록" />
			<BottomSheet
				isOpen={isBottomSheetBankOpen}
				onClose={closeBottomSheetBank}
				viewHeight="calc(100vh * 0.95)"
			>
				<SelectBanks />
			</BottomSheet>
			<div className="w-full h-[100vh] flex flex-col items-center mt-11">
				<form className="w-[90%] text-start">
					<p>은행명과 계좌번호, 예금주를 입력해주세요.</p>
					<div className="mt-7">
						<div className="flex flex-row justify-between font-bold">
							<p className="text-lg">은행명</p>
						</div>
						<div
							className="flex flex-row justify-between rounded-lg bg-lightGray mx-auto mt-5 p-3 text-gray"
							// onClick={openBottomSheet}
						>
							<p>은행을 선택해주세요.</p>
							<img
								className="cursor-pointer"
								src="/assets/images/dropdownArrow.svg"
								alt="아래로 이동"
								onClick={openBottomSheetBank}
							/>
						</div>
					</div>
					<div className="mt-7">
						<div className="flex flex-row justify-between font-bold">
							<p className="text-lg">계좌번호</p>
						</div>
						<input
							className="w-full h-11 rounded-xl text-lg mt-2 bg-lightGray pl-4 focus:outline-none"
							type="text"
							placeholder="계좌 번호를 입력해주세요."
							{...register('account-number', { required: true })}
							onChange={(e) => {
								e.target.value = e.target.value.replace(/[^0-9]/g, '');
							}}
						/>
					</div>
					<div className="mt-7">
						<div className="flex flex-row justify-between font-bold">
							<p className="text-lg">예금주</p>
						</div>
						<div className="w-full h-11 rounded-xl text-botton mt-2 bg-lightGray pl-4 focus:outline-none">
							<p className="pt-2 text-start text-gray">홍길동</p>
						</div>
					</div>
					<div className="mt-48">
						<div className="flex flex-row mb-5">
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
						<button
							type="button"
							className={`${
								isButtonDisabled
									? 'border-borderGray bg-borderGray'
									: 'border-borderGray bg-main text-white'
							} flex items-center text-center mx-auto  w-full h-11 rounded-xl text-gray text-m`}
							disabled={isButtonDisabled}
						>
							<p className="text-center mx-auto">계좌 등록하기</p>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddMyAccount;
