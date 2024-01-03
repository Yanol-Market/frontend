import React from 'react';
import { useForm } from 'react-hook-form';
import { getSignUp } from '../../apis/signup';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }, // isSubmitting, isDirty, isValid
	} = useForm({ mode: 'onChange' });

	const userName = watch('username');
	const userNickName = watch('userNickName');
	const userEmail = watch('email');
	const userPassword = watch('password');
	const userPhoneNumber = watch('phoneNumber');
	const watchCheckboxFirst = watch('first-checkbox');
	const watchCheckboxSecond = watch('second-checkbox');
	const watchCheckboxThird = watch('third-checkbox-');
	const isButtonDisabled = !(watchCheckboxFirst && watchCheckboxSecond);

	return (
		<div className="flex flex-col items-center w-full text-center px-5">
			<div className="mt-7">회원가입</div>
			<form className="mt-10" onSubmit={handleSubmit(getSignUp)}>
				<input
					className="border border-borderGray mb-4 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="이름"
					{...register('username', {
						required: true,
						minLength: { value: 2, message: '이름은 2자 이상이어야 합니다.' },
					})}
				/>
				{errors.username && errors.username.type === 'minLength' && (
					<div className="text-sm text-gray mb-4 text-start">
						{errors.username.message as string}
					</div>
				)}
				<input
					className="border border-borderGray mb-4 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="닉네임"
					{...register('userNickName', {
						required: true,
					})}
				/>

				<input
					className="border border-borderGray mb-4 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="이메일"
					{...register('email', {
						required: true,
						pattern: /@/,
					})}
				/>
				{errors.email && errors.email?.type === 'pattern' && (
					<div className="text-sm text-gray mb-4 text-start">
						@를 포함한 주소를 적어주세요.
					</div>
				)}
				<input
					className="border border-borderGray w-full h-11 mb-4 rounded-xl text-m pl-2 focus:outline-none"
					type="password"
					placeholder="비밀번호"
					{...register('password', {
						required: true,
						pattern: {
							value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
							message:
								'비밀번호는 최소 6자 이상, 숫자와 영문자를 모두 포함해야 합니다.',
						},
					})}
				/>
				{errors.password && errors.password.type === 'pattern' && (
					<div className="text-sm text-gray mb-4 text-start">
						{errors.password.message as string}
					</div>
				)}
				<input
					className="border border-borderGray mb-4 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="password"
					placeholder="비밀번호 확인"
					{...register('passwordChecked', {
						required: true,
						validate: (value) => value === watch('password'),
					})}
				/>
				{errors.passwordChecked &&
					errors.passwordChecked?.type === 'validate' && (
						<div className="text-sm text-gray mb-4 text-start">
							입력한 비밀번호와 다릅니다
						</div>
					)}
				<div className="relative">
					<input
						className="border border-borderGray mb-5 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
						type="text"
						placeholder="휴대폰 번호"
						{...register('phoneNumber', {
							required: true,
						})}
						onChange={(e) => {
							e.target.value = e.target.value.replace(/[^0-9]/g, '');
						}}
					/>
					<button
						type="button"
						className="absolute right-3 top-2.5 bottom-0 border border-borderGray bg-borderGray w-1/4 h-6 rounded-md text-sm"
					>
						인증번호 받기
					</button>
				</div>
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="인증번호 입력"
					{...register('authNumber')}
				/>

				<div className="flex flex-col mt-7 w-full">
					<div className="flex flex-row mb-2">
						<input
							className="appearance-none bg-[url('pages/signUp/component/unchecked.svg')] w-4 h-4 mr-1 checked:bg-[url('pages/signUp/component/checked.svg')]"
							type="checkbox"
							id="first-checkbox"
							{...register('first-checkbox', { required: true })}
						/>
						<label htmlFor="first-checkbox" className="text-sm text-gray">
							<span>(필수) 서비스 이용약관에 동의합니다.</span>
							<span className="text-blue cursor-pointer">[전문보기]</span>
						</label>
					</div>
					<div className="flex flex-row mb-2">
						<input
							className="appearance-none bg-[url('pages/signUp/component/unchecked.svg')] w-4 h-4 mr-1 checked:bg-[url('pages/signUp/component/checked.svg')]"
							type="checkbox"
							id="second-checkbox"
							{...register('second-checkbox', { required: true })}
						/>
						<label htmlFor="second-checkbox" className="text-sm text-gray">
							<span>(필수) 개인정보 처리방침에 동의합니다.</span>
							<span className="text-blue cursor-pointer">[전문보기]</span>
						</label>
					</div>
					<div className="flex flex-row mb-2">
						<input
							className="appearance-none bg-[url('pages/signUp/component/unchecked.svg')] w-4 h-4 mr-1 checked:bg-[url('pages/signUp/component/checked.svg')]"
							type="checkbox"
							id="third-checkbox"
							{...register('third-checkbox', { required: true })}
						/>
						<label htmlFor="third-checkbox" className="text-sm text-gray">
							<span>(선택) 문자 및 이메일 수신에 동의합니다.</span>
						</label>
					</div>
				</div>
				<button
					type="submit"
					className={`border ${
						isButtonDisabled
							? 'border-borderGray'
							: 'border-borderGray bg-main text-white'
					} flex items-center w-full h-11 rounded-xl text-gray text-center text-m mt-5"`}
					disabled={isButtonDisabled}
				>
					<span className="mx-auto">가입하기</span>
				</button>
			</form>
		</div>
	);
};

export default SignUp;
