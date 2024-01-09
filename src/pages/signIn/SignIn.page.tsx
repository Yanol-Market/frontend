import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getSignIn } from '../../apis/signin';
import { useForm } from 'react-hook-form';

const SignIn = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }, // isSubmitting, isDirty, isValid
	} = useForm({ mode: 'onChange' });

	const userid = watch('userid');
	const userpassword = watch('userpassword');

	const navigate = useNavigate();
	const mutation = useMutation({
		mutationFn: getSignIn,
		onSuccess(data) {
			navigate('/');
			console.log(data);
		},
		onError(err) {
			console.error(err);
			throw new Error('로그인 실패');
		},
	});
	const handleSignIn = async () => {
		const data = { email: userid, password: userpassword };
		mutation.mutate(data);
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
					{...(register('userid'),
					{
						required: true,
					})}
				/>

				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm mt-4 pl-1 focus:outline-none"
					type="password"
					placeholder="비밀번호"
					{...(register('userpassword'),
					{
						required: true,
					})}
				/>
				{errors.userpassword || errors.userid ? (
					<div className="text-red text-sm text-left mt-1">
						<p>이메일 및 비밀번호를 확인해주세요.</p>
					</div>
				) : (
					''
				)}
				<div>
					<button
						type="button"
						className="border w-full h-11 rounded-xl mt-6 bg-main text-white text-m cursor-pointer"
						onClick={handleSignIn}
					>
						로그인
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

export default SignIn;
