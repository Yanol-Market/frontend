import React from 'react';
export default function ProfileEdit() {
	return (
		<div className="flex flex-col items-center w-full text-center">
			<div className="mt-9 flex flex-row justify-start w-[90%]">
				<img
					className="cursor-pointer"
					src="/assets/images/leftArrow.svg"
					alt="왼쪽으로 가기"
				/>
				<p className="mx-auto text-botton font-bold">프로필 수정</p>
			</div>
			<div className="border border-borderGray mt-11 rounded-full w-24 h-24" />
			<div className="w-[90%] mt-14">
				<form>
					<div>
						<div className="flex flex-row justify-between font-bold">
							<p className="text-botton">닉네임</p>
							<button
								className="border border-borderGray w-[52px] bg-borderGray text-sm text-[#828282] rounded-md"
								type="button"
							>
								중복 확인
							</button>
						</div>
						<input
							className="w-full h-11 rounded-xl text-botton mt-2 bg-[#FAFAFA] pl-4 focus:outline-none"
							type="text"
							placeholder="원래 이름"
						/>
					</div>
					<div className="mt-7">
						<div className="flex flex-row justify-between font-bold">
							<p className="text-botton">휴대폰</p>
						</div>
						<input
							className="w-full h-11 rounded-xl text-botton mt-2 bg-[#FAFAFA] pl-4 focus:outline-none"
							type="text"
							placeholder="원래 이름"
						/>
					</div>
					<div className="mt-7">
						<div className="flex flex-row justify-between font-bold">
							<p className="text-botton">관심지역</p>
						</div>
						<input
							className="w-full h-11 rounded-xl text-botton mt-2 bg-[#FAFAFA] pl-4 focus:outline-none"
							type="text"
							placeholder="원래 이름"
						/>
					</div>
					<button
						type="submit"
						className="mt-44 flex items-center w-full h-11 rounded-xl text-center text-m mt-5 bg-main text-white"
					>
						<span className="mx-auto">가입하기</span>
					</button>
				</form>
			</div>
		</div>
	);
}
