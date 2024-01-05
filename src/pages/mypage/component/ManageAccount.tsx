import React from 'react';
import { Header } from '../../../component/common/Header';

const ManageAccount = () => {
	return (
		<div>
			<Header title="계정 관리" />
			<div className="w-full h-[100vh] flex flex-col items-center">
				<div className="w-[90%] mt-5 flex flex-col">
					<div className="flex flex-row justify-between mb-5">
						<span>비밀번호 변경</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
					<div className="flex flex-row justify-between mb-5">
						<span>로그아웃</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
					<div className="flex flex-row justify-between mb-5">
						<span>회원탈퇴</span>
						<img
							className="cursor-pointer"
							src="/assets/images/rightArrowTab.svg"
							alt="탭 이동"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageAccount;
