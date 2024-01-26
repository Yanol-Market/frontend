import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getSignUp } from '../../apis/signup';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getNickName } from '../../apis/nickname';
import { getEmail } from '../../apis/email';
import { Header } from '../../component/common/Header';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({ mode: 'onChange' });
	const [isNickNameAvailable, setIsNickNameAvailable] = useState(null);
	const [isEmailAvailable, setIsEmailAvailable] = useState(null);
	const userName = watch('username');
	const userNickName = watch('userNickName');
	const userEmail = watch('email');
	const userPassword = watch('password');
	const userpasswordChecked = watch('passwordChecked');
	const userPhoneNumber = watch('phoneNumber');
	const watchCheckboxFirst = watch('first-checkbox');
	const watchCheckboxSecond = watch('second-checkbox');
	const watchCheckboxThird = watch('third-checkbox');
	const isButtonDisabled =
		!(watchCheckboxFirst && watchCheckboxSecond) ||
		isEmailAvailable === null ||
		isEmailAvailable === true ||
		isNickNameAvailable === null ||
		isNickNameAvailable === true ||
		!userPhoneNumber ||
		!userName ||
		!userNickName ||
		!userEmail ||
		!userPassword ||
		!userpasswordChecked;

	const userInfoData = localStorage.getItem('userInfo');
	const navigate = useNavigate();
	const mutation = useMutation({
		mutationFn: getSignUp,
		onSuccess(data) {
			if (userInfoData) {
				navigate('/yasignin');
			}
			navigate('/signin');
		},
		onError(err) {
			console.error(err);
			alert('이미 가입된 계정입니다. 로그인을 해주세요.');
			navigate('/signin');
			throw new Error('회원가입 실패');
		},
	});

	useEffect(() => {
		if (userInfoData) {
			const userData = JSON.parse(userInfoData);
			setValue('username', userData.name);
			setValue('email', userData.email);
			setValue('phoneNumber', userData.phoneNumber);
		}
	}, [userInfoData, setValue]);
	const handleCheckNickName = async () => {
		if (userNickName === '') {
			return;
		}
		const res = await getNickName(userNickName);
		console.log(res.data);
		setIsNickNameAvailable(res.data);
		console.log(isNickNameAvailable);
	};

	const handleCheckEmail = async () => {
		if (userEmail === '') {
			return;
		}
		const res = await getEmail(userEmail);
		console.log(res);
		setIsEmailAvailable(res.data);
		console.log(isEmailAvailable);
	};
	const handleSignUp = () => {
		const userInfoData = localStorage.getItem('userInfo');
		let userId = null;

		if (userInfoData) {
			const userData = JSON.parse(userInfoData);
			userId = userData.id;
		}
		const data = {
			name: userName,
			nickname: userNickName,
			email: userEmail,
			password: userPassword,
			phoneNumber: userPhoneNumber,
			yanoljaId: userId,
			agreement: {
				isMarketing: watchCheckboxThird,
			},
		};
		if (data) {
			mutation.mutate(data);
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
			<Header title="회원가입" />
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
							(userNickName && errors.userNickName) || isNickNameAvailable
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
						className={`absolute right-3 top-2.5 bottom-0 ${
							isNickNameAvailable === null || isNickNameAvailable
								? 'border border-main bg-main text-white'
								: 'bg-borderGray'
						} border border-borderGray bg-borderGray w-1/4 h-6 rounded-md text-sm focus:outline-none`}
						onClick={handleCheckNickName}
					>
						중복 확인
					</button>
				</div>

				{isNickNameAvailable === null || errors.userNickName ? (
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
							(userEmail && errors.email) || isEmailAvailable
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
						className={`absolute right-3 top-2.5 bottom-0 ${
							isEmailAvailable === null || isEmailAvailable
								? 'border border-main bg-main text-white'
								: 'bg-borderGray'
						} border border-borderGray bg-borderGray w-1/4 h-6 rounded-md text-sm focus:outline-none`}
						onClick={handleCheckEmail}
					>
						중복 확인
					</button>
				</div>
				{isEmailAvailable === null || errors.email ? (
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
							pattern: {
								value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
								message: '- 없이 숫자만 입력해주세요',
							},
						})}
					/>
				</div>

				<div className="flex flex-col mt-4 w-full">
					<div className="flex flex-row mb-2">
						<input
							className="appearance-none bg-[url('pages/signUp/component/unchecked.svg')] w-4 h-4 mr-1 checked:bg-[url('pages/signUp/component/checked.svg')] cursor-pointer"
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
						isButtonDisabled ? 'border-borderGray' : 'bg-main text-white'
					} flex items-center w-full h-11 rounded-xl text-gray text-center text-m mt-5" cursor-pointer`}
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
