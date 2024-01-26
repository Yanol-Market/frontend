import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import { useForm } from 'react-hook-form';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentFailBtn from '../../../../component/common/BottomSheet/Content/ContentFailBtnPage';
import MyPageClickBtn from '../btn/MyPageClickBtn';
import { useMutation } from '@tanstack/react-query';
import { patchPassword } from '../../../../apis/patchPassword';
import { useNavigate } from 'react-router-dom';

const EditPassword = () => {
	const {
		register,
		// handleSubmit,
		watch,
		formState: { errors }, // isSubmitting, isDirty, isValid
	} = useForm({ mode: 'onChange' });
	const [isBottomSheetPasswordOpen, setIsBottomSheetPasswordOpen] =
		useState(false);

	const navigate = useNavigate();
	const currentPasswordCheckBox = watch('currentPasswordBox');
	const currentPasswordText = watch('currentPassword');
	const newPasswordText = watch('newPassword');
	const newPasswordCheckBox = watch('newPasswordBox');
	const newPassWordConfirmCheckBox = watch('newPasswordConfirmBox');
	const newPassWordConfirmText = watch('newPassWordConfirm');
	const isButtonDisabled =
		!currentPasswordText ||
		!newPasswordText ||
		!newPassWordConfirmText ||
		!currentPasswordText ||
		errors.currentPassword ||
		(newPasswordText && errors.newPassword) ||
		(newPassWordConfirmText && errors.newPassWordConfirm);

	const closeBottomSheetPassword = () => {
		setIsBottomSheetPasswordOpen(false);
	};
	const mutation = useMutation({
		mutationFn: patchPassword,
		onSuccess() {
			alert('비밀번호 변경 성공');
			navigate('/member/editpassword/confirm');
		},
		onError() {
			setIsBottomSheetPasswordOpen(true);
		},
	});

	const handleEditPassword = () => {
		const data = {
			originPassword: currentPasswordText,
			changePassword: newPasswordText,
		};
		mutation.mutate(data);
	};
	return (
		<div>
			<Header title="비밀번호 변경" />
			<BottomSheet
				isOpen={isBottomSheetPasswordOpen}
				onClose={closeBottomSheetPassword}
				viewHeight="calc(100vh * 0.22)"
			>
				<ContentFailBtn
					title="현재 비밀번호를 다시 확인해주세요."
					btn="네"
					btnFunc={closeBottomSheetPassword}
				/>
			</BottomSheet>
			<div className="flex flex-col items-center w-full text-center">
				<div className="w-[90%] mt-14">
					<form>
						<div className="relative">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">현재 비밀번호</p>
								<input
									type="checkbox"
									className="appearance-none bg-no-repeat bg-typePassword w-5 h-5 absolute cursor-pointer right-3 top-[2.6rem] checked:bg-typeText"
									{...register('currentPasswordBox', {
										required: true,
									})}
								/>
							</div>
							<input
								className={`w-full h-11 rounded-xl text-m mt-2 bg-lightGray pl-4 focus:outline-none ${
									errors.currentPassword && currentPasswordText
										? 'border border-red'
										: ''
								}`}
								type={currentPasswordCheckBox ? 'type' : 'password'}
								placeholder="현재 비밀번호를 입력하세요."
								{...register('currentPassword', {
									required: true,
								})}
							/>
						</div>
						<div className="relative mt-8">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">새 비밀번호</p>
								<input
									type="checkbox"
									className="appearance-none bg-no-repeat bg-typePassword w-5 h-5 absolute cursor-pointer right-3 top-[2.6rem] checked:bg-typeText"
									{...register('newPasswordBox', {
										required: true,
									})}
								/>
							</div>
							<input
								className={`w-full h-11 rounded-xl text-m mt-2 bg-lightGray pl-4 focus:outline-none ${
									errors.newPassword && newPasswordText
										? 'border border-red'
										: 'border-none'
								}`}
								type={newPasswordCheckBox ? 'type' : 'password'}
								placeholder="새 비밀번호 입력(숫자 + 영문자, 6자 이상 20자 이내)"
								{...register('newPassword', {
									required: true,
									validate: (value) => value !== watch('currentPassword'),
									pattern: {
										value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
										message:
											'비밀번호는 최소 6자 이상, 숫자와 영문자를 모두 포함해야 합니다.',
									},
								})}
							/>
							{errors.newPassword && (
								<div className="text-sm text-red mb-4 text-start">
									{errors.newPassword.message as string}
								</div>
							)}
							{errors?.newPassword?.type === 'validate' && (
								<div className="text-sm text-red text-start">
									현재 비밀번호와 다른 비밀번호를 입력해주세요.
								</div>
							)}
						</div>
						<div className="relative mt-8">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">새 비밀번호 확인</p>
								<input
									type="checkbox"
									className="appearance-none bg-no-repeat bg-typePassword w-5 h-5 absolute cursor-pointer right-3 top-[2.6rem] checked:bg-typeText"
									{...register('newPasswordConfirmBox', {
										required: true,
									})}
								/>
							</div>
							<input
								className={`w-full h-11 rounded-xl text-m mt-2 bg-lightGray pl-4 focus:outline-none ${
									errors.newPassWordConfirm && newPassWordConfirmText
										? 'border border-red'
										: 'border-none'
								}`}
								type={newPassWordConfirmCheckBox ? 'type' : 'password'}
								placeholder="새 비밀번호를 다시 한 번 입력하세요."
								{...register('newPassWordConfirm', {
									required: true,
									validate: (value) => value === watch('newPassword'),
								})}
							/>
							{errors.newPassWordConfirm &&
								errors.newPassWordConfirm?.type === 'validate' && (
									<div className="text-sm text-red text-start">
										입력한 비밀번호와 다릅니다
									</div>
								)}
						</div>
						<MyPageClickBtn
							content="비밀번호 변경하기"
							onClick={handleEditPassword}
							isDisabled={isButtonDisabled}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditPassword;
