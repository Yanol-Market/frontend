import React, { useState } from 'react';

const PurchaserInfo = () => {
	const [saveInfo, setSaveInfo] = useState(false);
	const myProfileJSON = localStorage.getItem('userProfileInfo');
	const myProfile = JSON.parse(myProfileJSON as string);
	return (
		<div className="p-[20px]">
			<div className="pt-[10px] pb-[20px]">
				<h2 className="text-body font-bold mb-[10px]">구매자 정보</h2>
				<p className="text-m">
					숙소 예약 소유 변경을 위한 정보입니다.
					<br />
					실제 투숙객의 정보를 입력해주세요.
				</p>
			</div>
			<div>
				<div className="pt-[10px]">
					<p className="text-lg font-medium">이름</p>
					<div className="bg-[#fafafa] w-[100%] rounded-[12px] p-[12px] text-lg m-[5px]">
						{myProfile.data.name}
					</div>
				</div>
				<div className="pt-[10px]">
					<p className="text-lg font-medium">전화번호</p>
					<div className="bg-[#fafafa] w-[100%] rounded-[12px] p-[12px] text-lg m-[5px]">
						{myProfile.data.phoneNumber}
					</div>
				</div>
				<div className="pt-[10px]">
					<p className="text-lg font-medium">이메일</p>
					<div className="bg-[#fafafa] w-[100%] rounded-[12px] p-[12px] text-lg m-[5px]">
						{myProfile.data.email}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PurchaserInfo;
