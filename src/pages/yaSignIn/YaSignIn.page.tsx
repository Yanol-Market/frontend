import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getSignIn } from '../../apis/signin';
import { setCookie } from '../../apis/cookie';

const YaSignIn = () => {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors }, // isSubmitting, isDirty, isValid
	} = useForm({ mode: 'onChange' });

	const yaUserId = watch('yauserid');
	const yaUserPassword = watch('yauserpassword');
	const navigate = useNavigate();
	const mutation = useMutation({
		mutationFn: getSignIn,
		onSuccess(data) {
			console.log(data);
			const { accessToken, refreshToken } = data[0].data;
			setCookie('accessToken', accessToken, { path: '/' });
			setCookie('refreshToken', refreshToken, { path: '/' });

			navigate('/');
		},
		onError(err) {
			console.error(err);
			throw new Error('로그인 실패');
		},
	});
	const handleSignIn = async () => {
		const data = { email: yaUserId, password: yaUserPassword };

		if (data.email === 'error@naver.com') {
			setError('emailError', { message: '이메일 및 비밀번호를 확인해주세요.' });
		} else {
			mutation.mutate(data);
		}
	};

	const handleSignUp = () => {
		navigate('/signup');
	};

	return (
		<div className="flex flex-col items-center w-full h-screen text-center px-5">
			<img className="mt-24" src="/assets/images/mainLogo.svg" alt="logo" />
			<form
				className="mt-[3.75rem] w-full"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm pl-1 focus:outline-none"
					type="text"
					placeholder="이메일"
					{...register('yauserid', {
						required: true,
					})}
				/>
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm mt-4 pl-1 focus:outline-none"
					type="password"
					placeholder="비밀번호"
					{...register('yauserpassword', {
						required: true,
					})}
				/>

				{errors.emailError ? (
					<div className="text-red text-sm text-left mt-1">
						<p>{errors.emailError.message as string}</p>
					</div>
				) : (
					''
				)}
				<div>
					<button
						type="button"
						className="border w-full h-11 rounded-xl mt-6 bg-yaLogo text-white text-m cursor-pointer"
						onClick={handleSignIn}
					>
						<span className="text-center w-2/3 ml-2 text-white">
							야놀자로 로그인
						</span>
					</button>

					<p className="text-sm text-left text-gray mt-1 cursor-pointer">
						비밀번호를 잊으셨나요?
					</p>
				</div>
			</form>
			<div className="w-full mt-[3.75rem]">
				<button
					type="button"
					className="border border-borderGray bg-yaLogo flex items-center w-full h-11 rounded-xl text-gray text-m"
					onClick={handleSignUp}
				>
					<img
						className="ml-6"
						src="/assets/images/yaLogo.svg"
						alt="야놀자 로고"
					/>
					<span className="text-center w-2/3 ml-2 text-white">
						야놀자로 로그인
					</span>
				</button>
				<button
					type="button"
					className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-m mt-3"
					onClick={handleSignUp}
				>
					<img
						className="ml-6"
						src="/assets/images/emailLogo.svg"
						alt="이메일 로고"
					/>
					<span className="w-2/3 ml-2 text-center">회원가입</span>
				</button>
			</div>
		</div>
	);
};

export default YaSignIn;
