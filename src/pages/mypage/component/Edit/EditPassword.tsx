import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import { useForm } from 'react-hook-form';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import NotConfirmedPassword from '../NotConfirmedPassword';

const EditPassword = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }, // isSubmitting, isDirty, isValid
	} = useForm({ mode: 'onChange' });
	const [isBottomSheetPasswordOpen, setIsBottomSheetPasswordOpen] =
		useState(false);

	const openBottomSheetPassword = () => {
		setIsBottomSheetPasswordOpen(true);
	};

	const closeBottomSheetPassword = () => {
		setIsBottomSheetPasswordOpen(false);
	};
	return (
		<div>
			<Header title="비밀번호 변경" />
			<BottomSheet
				isOpen={isBottomSheetPasswordOpen}
				onClose={closeBottomSheetPassword}
				viewHeight="calc(100vh * 0.3)"
			>
				<NotConfirmedPassword />
			</BottomSheet>
			<div className="flex flex-col items-center w-full h-[100vh] text-center">
				<div className="w-[90%] mt-14">
					<form>
						<div className="relative">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">현재 비밀번호</p>
								<img
									className="absolute cursor-pointer right-3 top-[2.6rem] w-4 h-4"
									src="/assets/images/typePassword.svg"
								/>
							</div>
							<input
								className="w-full h-11 rounded-xl text-m mt-2 bg-lightGray pl-4 focus:outline-none"
								type="text"
								placeholder="현재 비밀번호를 입력하세요."
							/>
						</div>
						<div className="relative mt-8">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">새 비밀번호</p>
								<img
									className="absolute cursor-pointer right-3 top-[2.6rem] w-4 h-4"
									src="/assets/images/typePassword.svg"
								/>
							</div>
							<input
								className="w-full h-11 rounded-xl text-m mt-2 bg-lightGray pl-4 focus:outline-none"
								type="password"
								placeholder="새 비밀번호 입력(숫자 + 영문자, 6자 이상 20자 이내)"
								{...register('newPassword', {
									required: true,
									pattern: {
										value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
										message:
											'비밀번호는 최소 6자 이상, 숫자와 영문자를 모두 포함해야 합니다.',
									},
								})}
							/>
							{errors.newPassword && errors.newPassword.type === 'pattern' && (
								<div className="text-sm text-red mb-4 text-start">
									{errors.newPassword.message as string}
								</div>
							)}
						</div>
						<div className="relative mt-8">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">새 비밀번호 확인</p>
								<img
									className="absolute cursor-pointer right-3 top-[2.6rem] w-4 h-4"
									src="/assets/images/typePassword.svg"
								/>
							</div>
							<input
								className="w-full h-11 rounded-xl text-m mt-2 bg-lightGray pl-4 focus:outline-none"
								type="password"
								placeholder="새 비밀번호를 다시 한 번 입력하세요."
								{...register('newpasswordChecked', {
									required: true,
									validate: (value) => value === watch('newPassword'),
								})}
							/>
							{errors.newpasswordChecked &&
								errors.newpasswordChecked?.type === 'validate' && (
									<div className="text-sm text-red text-start">
										입력한 비밀번호와 다릅니다
									</div>
								)}
						</div>

						<button
							type="button"
							className="mt-64 flex items-center w-full h-11 rounded-xl text-center text-m bg-main text-white"
							onClick={openBottomSheetPassword}
						>
							<span className="mx-auto">비밀번호 변경하기</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditPassword;
