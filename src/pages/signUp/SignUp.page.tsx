import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getSignUp } from '../../apis/signup';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getNickName } from '../../apis/nickname';
import { getEmail } from '../../apis/email';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors }, // isSubmitting, isDirty, isValid
	} = useForm({ mode: 'onChange' });

	const userName = watch('username');
	const userNickName = watch('userNickName');
	const userEmail = watch('email');
	const userPassword = watch('password');
	const userpasswordChecked = watch('passwordChecked');
	const userPhoneNumber = watch('phoneNumber');
	const watchCheckboxFirst = watch('first-checkbox');
	const watchCheckboxSecond = watch('second-checkbox');
	const watchCheckboxThird = watch('third-checkbox');
	const isButtonDisabled = !(watchCheckboxFirst && watchCheckboxSecond);

	const [isNickNameAvailable, setIsNickNameAvailable] = useState(null);
	const [isEmailAvailable, setIsEmailAvailable] = useState(null);

	const navigate = useNavigate();
	const mutation = useMutation({
		mutationFn: getSignUp,
		onSuccess(data) {
			console.log(data);
			navigate('/');
		},
		onError(err) {
			console.error(err);
			throw new Error('로그인 실패');
		},
	});

	const storedUserData = sessionStorage.getItem('userData');
	useEffect(() => {
		if (storedUserData) {
			const userData = JSON.parse(storedUserData);
			setValue('username', userData.name);
			setValue('email', userData.email);
			setValue('phoneNumber', userData.phoneNumber);
		}
	}, [storedUserData, setValue]);
	const handleCheckNickName = async () => {
		const res = await getNickName(userNickName);
		setIsNickNameAvailable(res?.data?.data);
	};

	const handleCheckEmail = async () => {
		const res = await getEmail(userEmail);
		setIsEmailAvailable(res?.data?.data);
	};
	const handleSignUp = () => {
		const storedUserData = sessionStorage.getItem('userData');
		let userId = null;

		if (storedUserData) {
			const userData = JSON.parse(storedUserData);
			userId = userData.id;
		}
		const data = {
			name: userName,
			nickname: userNickName,
			email: userEmail,
			password: userPassword,
			phoneNumber: userPhoneNumber,
			id: userId,
			agreement: {
				isMarketing: watchCheckboxThird,
			},
		};
		if (data) {
			mutation.mutate(data);
			console.log(data);
		}
	};
	useEffect(() => {
		if (userNickName === '') {
			setIsNickNameAvailable(null);
		}
		if (userEmail === '') {
			setIsEmailAvailable(null);
		}
	}, [userNickName, userEmail]);
	return (
		<div className="flex flex-col items-center text-center">
			<div className="mt-7">회원가입</div>
			<form className="mt-10 w-[90%]" onSubmit={handleSubmit(handleSignUp)}>
				<input
					className={`border border-borderGray w-full h-11 mb-4  rounded-xl text-m pl-2 focus:outline-none ${
						userName && errors.username ? 'border border-red mb-0' : ''
					}`}
					type="text"
					placeholder="이름"
					{...register('username', {
						required: true,
						minLength: { value: 2, message: '이름은 2자 이상이어야 합니다.' },
					})}
				/>

				{errors.username && errors.username.type === 'minLength' && (
					<div className="text-sm text-red mb-2 text-start">
						{errors.username.message as string}
					</div>
				)}
				<div className="relative">
					<input
						className={`border ${
							userNickName &&
							isNickNameAvailable !== null &&
							!isNickNameAvailable
								? 'border-green'
								: 'border-borderGray'
						} w-full h-11 rounded-xl text-m pl-2 focus:outline-none ${
							userNickName && errors.userNickName && !isNickNameAvailable
								? 'border border-red mb-0'
								: ''
						}`}
						type="text"
						placeholder="닉네임"
						{...register('userNickName', {
							required: true,
							pattern: {
								value: /^[가-힣a-zA-Z0-9]*$/,
								message:
									'특수문자와 띄어쓰기를 제외한 한글, 영문, 숫자로 닉네임을 작성해주세요.',
							},
						})}
					/>
					<button
						type="button"
						className="absolute right-3 top-2.5 bottom-0 border border-borderGray bg-borderGray w-1/4 h-6 rounded-md text-sm"
						onClick={handleCheckNickName}
					>
						중복 확인
					</button>
				</div>

				{isNickNameAvailable === null ? (
					<div className="text-sm mb-4 text-start text-red">
						{errors?.userNickName?.message as string}
					</div>
				) : isNickNameAvailable ? (
					<div className="text-sm mb-4 text-start text-red">
						이미 사용 중인 닉네임입니다.
					</div>
				) : (
					<div className="text-sm mb-4 text-start text-green">
						사용 가능한 닉네임입니다.
					</div>
				)}

				<div className="relative">
					<input
						className={`border ${
							userEmail && isEmailAvailable !== null && !isEmailAvailable
								? 'border-green'
								: 'border-borderGray'
						} w-full h-11 rounded-xl text-m  pl-2 focus:outline-none ${
							userEmail && errors.email && !isEmailAvailable
								? 'border border-red'
								: ''
						}`}
						type="text"
						placeholder="이메일"
						{...register('email', {
							required: true,
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: '특수문자와 띄어쓰기를 제외한 이메일을 작성해주세요.',
							},
						})}
					/>
					<button
						type="button"
						className="absolute right-3 top-2.5 bottom-0 border border-borderGray bg-borderGray w-1/4 h-6 rounded-md text-sm"
						onClick={handleCheckEmail}
					>
						중복 확인
					</button>
				</div>
				{isEmailAvailable === null ? (
					<div className="text-sm mb-4 text-start text-red">
						{errors?.email?.message as string}
					</div>
				) : isEmailAvailable ? (
					<div className="text-sm mb-4 text-start text-red">
						이미 사용 중인 이메일입니다.
					</div>
				) : (
					<div className="text-sm mb-4 text-start text-green">
						사용 가능한 이메일입니다.
					</div>
				)}

				<input
					className={`border border-borderGray w-full h-11 rounded-xl mb-4 text-m pl-2 focus:outline-none ${
						userPassword && errors.password ? 'border border-red mb-0' : ''
					}`}
					type="password"
					placeholder="비밀번호"
					{...register('password', {
						required: true,
						pattern: {
							value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
							message: '최소 6자 이상, 숫자와 영문자를 모두 포함해야 합니다.',
						},
					})}
				/>

				{errors.password && errors.password.type === 'pattern' && (
					<div className="text-sm text-red mb-4 text-start">
						{errors.password.message as string}
					</div>
				)}
				<input
					className={`border border-borderGray w-full h-11 rounded-xl mb-4 text-m pl-2 focus:outline-none ${
						errors.passwordChecked && userpasswordChecked && userPassword
							? 'border border-red mb-0'
							: ''
					}`}
					type="password"
					placeholder="비밀번호 확인"
					{...register('passwordChecked', {
						required: true,
						validate: (value) => value === watch('password'),
					})}
				/>
				{userPassword &&
					userpasswordChecked &&
					errors.passwordChecked &&
					errors.passwordChecked?.type === 'validate' && (
						<div className="text-sm text-red mb-4 text-start">
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
							<span className="cursor-pointer hover:underline decoration-1">
								[전문보기]
							</span>
						</label>
					</div>
					<div className="flex flex-row mb-2">
						<input
							className="appearance-none bg-[url('pages/signUp/component/unchecked.svg')] w-4 h-4 mr-1 checked:bg-[url('pages/signUp/component/checked.svg')] cursor-pointer"
							type="checkbox"
							id="second-checkbox"
							{...register('second-checkbox', { required: true })}
						/>
						<label htmlFor="second-checkbox" className="text-sm text-gray">
							<span>(필수) 개인정보 처리방침에 동의합니다.</span>
							<span className="cursor-pointer hover:underline decoration-1">
								[전문보기]
							</span>
						</label>
					</div>
					<div className="flex flex-row mb-2">
						<input
							className="appearance-none bg-unchecked w-4 h-4 mr-1 checked:bg-checked cursor-pointer"
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
					type="button"
					className={`border ${
						isButtonDisabled
							? 'border-borderGray'
							: 'border-borderGray bg-main text-white'
					} flex items-center w-full h-11 rounded-xl text-gray text-center text-m mt-5"`}
					disabled={isButtonDisabled}
					onClick={handleSignUp}
				>
					<span className="mx-auto">가입하기</span>
				</button>
			</form>
		</div>
	);
};

export default SignUp;
