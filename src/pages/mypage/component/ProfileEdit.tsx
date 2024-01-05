import React from 'react';
import { Header } from '../../../component/common/Header';

const ProfileEdit = () => {
	return (
		<div>
			<Header title="프로필 수정" />
			<div className="flex flex-col items-center w-full h-[100vh] text-center">
				<div className="border border-borderGray mt-11 rounded-full w-24 h-24" />
				<div className="w-[90%] mt-14">
					<form>
						<div className="relative">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">닉네임</p>
								<button
									className="border border-borderGray absolute cursor-pointer right-2 top-[2.5rem] w-14 h-6 bg-borderGray text-sm text-[#828282] rounded-md"
									type="button"
								>
									중복 확인
								</button>
							</div>
							<input
								className="w-full h-11 rounded-xl text-lg mt-2 bg-lightGray pl-4 focus:outline-none"
								type="text"
								placeholder="원래 이름"
							/>
						</div>
						<div className="mt-7">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">휴대폰 번호</p>
							</div>
							<div className="w-full h-11 rounded-xl text-botton mt-2 bg-lightGray pl-4 focus:outline-none">
								<p className="pt-2 text-start text-gray">010-1234-5678</p>
							</div>
						</div>
						<button
							type="submit"
							className="mt-44 flex items-center w-full h-11 rounded-xl text-center text-m bg-main text-white"
						>
							<span className="mx-auto">변경사항 저장하기</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProfileEdit;
