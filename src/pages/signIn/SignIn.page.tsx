import React from 'react';
// import tw from 'twin.macro';
// import Logo from '/assets/images/logo.svg';

export default function SignIn() {
	return (
		<div className="flex flex-col items-center w-full text-center">
			<img className="mt-24" src="/assets/images/mainLogo.svg" alt="logo" />
			<form className="mt-[3.75rem] w-full">
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm pl-1 focus:outline-none"
					type="text"
					placeholder="이메일"
				/>

				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm mt-4 pl-1 focus:outline-none"
					type="password"
					placeholder="비밀번호"
				/>

				<div className="text-sm text-left mt-1">
					<p>이메일 및 비밀번호를 확인해주세요.</p>
				</div>
				<div>
					<button className="border w-full h-11 rounded-xl mt-6 bg-main text-white text-m cursor-pointer">
						로그인
					</button>
					<p className="text-sm text-left text-gray mt-1 cursor-pointer">
						비밀번호를 잊으셨나요?
					</p>
				</div>
			</form>
			<div className="w-full mt-[3.75rem]">
				<button className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-m">
					<img
						className="ml-6"
						src="/assets/images/yaLogo.svg"
						alt="야놀자 로고"
					/>
					<span className="text-center w-2/3">야놀자로 로그인</span>
				</button>
				<button className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-m mt-3">
					<img
						className="ml-6"
						src="/assets/images/kakaoTalkLogo.svg"
						alt="카카오톡 로고"
					/>
					<span className="text-center w-2/3">카카오톡으로 로그인</span>
				</button>
				<button className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-m mt-3">
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

// const StyledContainer = tw.div`
//     flex-col
//     w-full
//     justify-center
// `;
