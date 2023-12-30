import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getSignIn } from '../../apis/signin';
import { useForm } from 'react-hook-form';

export default function SignIn() {
	const [inputEmail, setEmail] = useState('');
	const [inputPassword, setPassword] = useState('');
	// const navigate = useNavigate();
	const mutation = useMutation({
		mutationFn: getSignIn,
		onSuccess(data) {
			// navigate('/');
			console.log(data);
		},
		onError(err) {
			console.error(err);
			throw new Error('로그인 실패');
		},
	});
	const handleSignIn = async () => {
		const data = { email: inputEmail, password: inputPassword };
		mutation.mutate(data);
	};

	return (
		<div className="flex flex-col items-center w-full text-center px-5">
			<img className="mt-24" src="/assets/images/mainLogo.svg" alt="logo" />
			<form className="mt-[3.75rem] w-full">
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm pl-1 focus:outline-none"
					type="text"
					placeholder="이메일"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm mt-4 pl-1 focus:outline-none"
					type="password"
					placeholder="비밀번호"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className="text-red text-sm text-left mt-1">
					<p>이메일 및 비밀번호를 확인해주세요.</p>
				</div>
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
					className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-m"
				>
					<img
						className="ml-6"
						src="/assets/images/yaLogo.svg"
						alt="야놀자 로고"
					/>
					<span className="text-center w-2/3">야놀자로 로그인</span>
				</button>
				<button
					type="button"
					className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-m mt-3"
				>
					<img
						className="ml-6"
						src="/assets/images/kakaoTalkLogo.svg"
						alt="카카오톡 로고"
					/>
					<span className="text-center w-2/3">카카오톡으로 로그인</span>
				</button>
				<button
					type="button"
					className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-m mt-3"
				>
					<img
						className="ml-6"
						src="/assets/images/emailLogo.svg"
						alt="이메일 로고"
					/>
					<span className="text-center w-2/3">회원가입</span>
				</button>
			</div>
		</div>
	);
}
