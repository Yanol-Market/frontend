import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setCookie } from '../../apis/cookie';
import { getYaSignIn } from '../../apis/yaSignIn';

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
		mutationFn: getYaSignIn,
		onSuccess(data) {
			console.log(data.data.userInfo);
			console.log(data.data);
			if (data.data.token) {
				const { accessToken, refreshToken } = data.data.token;
				setCookie('accessToken', accessToken, { path: '/' });
				setCookie('refreshToken', refreshToken, { path: '/' });
			}
			if (data.data.isFirst) {
				const userInfo = localStorage.setItem(
					'userInfo',
					JSON.stringify(data.data.userInfo),
				);
				navigate('/signup');
			}
		},
		onError(err) {
			console.error(err);
			throw new Error('로그인 실패');
		},
	});

	const handleYaSignIn = async () => {
		const data = { email: yaUserId, password: yaUserPassword };
		mutation.mutate(data);
		const userEmail = localStorage.setItem('userId', data.email);
	};

	return (
		<div className="flex flex-col items-center w-full h-screen text-center px-5">
			<img className="mt-24" src="/assets/images/yanoljaLogo.svg" alt="logo" />
			<form
				className="mt-[3.75rem] w-full"
				onSubmit={handleSubmit(handleYaSignIn)}
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

				{errors.errorEmail ? (
					<div className="text-red text-sm text-left mt-1">
						<p>{errors.errorEmail.message as string}</p>
					</div>
				) : (
					''
				)}
				<div>
					<button
						type="submit"
						className="border w-full h-11 rounded-xl mt-6 bg-yaLogo text-white text-m cursor-pointer"
						onClick={handleYaSignIn}
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
		</div>
	);
};

export default YaSignIn;
