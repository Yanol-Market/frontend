import React, { useState } from 'react';

export default function SignUp() {
	const [password, setPassword] = useState(false);
	return (
		<div className="flex flex-col items-center w-full text-center">
			<div className="mt-7">회원가입</div>
			<form className="mt-10">
				<input
					className="border border-borderGray mb-5 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="이름"
				/>
				<input
					className="border border-borderGray mb-5 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="닉네임"
				/>
				<input
					className="border border-borderGray mb-5 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="이메일"
				/>
				<input
					className="border border-borderGray  w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="비밀번호"
				/>
				{password ? (
					<span className="text-sm mr-3 text-gray">
						비밀번호는 최소 6자 이상, 숫자와 영문자를 모두 포함해야 합니다.
					</span>
				) : (
					<div className="mb-5"></div>
				)}
				<input
					className="border border-borderGray mb-5 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="비밀번호 확인"
				/>
				<div className="relative">
					<input
						className="border border-borderGray mb-5 w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
						type="text"
						placeholder="휴대폰 번호"
					/>
					<button className="absolute right-3 top-2.5 bottom-0 border border-borderGray bg-borderGray w-1/4 h-6 rounded-md text-sm">
						인증번호 받기
					</button>
				</div>
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-m pl-2 focus:outline-none"
					type="text"
					placeholder="인증번호 입력"
				/>
			</form>
			<div className="flex flex-col mt-7 w-full">
				<div className="flex flex-row mb-2">
					<input
						className="appearance-none bg-[url('pages/signUp/component/unchecked.svg')] w-4 h-4 mr-1 checked:bg-[url('pages/signUp/component/checked.svg')]"
						type="checkbox"
						id="first-checkbox "
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
					/>
					<label htmlFor="third-checkbox" className="text-sm text-gray">
						<span>(선택) 문자 및 이메일 수신에 동의합니다.</span>
					</label>
				</div>
			</div>
			<button className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-center text-m mt-5 hover:bg-main hover:text-white">
				<span className="mx-auto">가입하기</span>
			</button>
		</div>
	);
}
