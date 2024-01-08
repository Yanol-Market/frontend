import React from 'react';

const PurchaserInfo = () => {
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
					<p className="text-button font-medium">이름</p>
					<input
						type="text"
						className="bg-[#fafafa] w-[100%] rounded-[12px] p-[12px] text-button m-[5px]"
					/>
				</div>
				<div className="pt-[10px]">
					<p className="text-button font-medium">전화번호</p>
					<input
						type="text"
						className="bg-[#fafafa] w-[100%] rounded-[12px] p-[12px] text-button m-[5px]"
					/>
				</div>
				<div className="pt-[10px]">
					<p className="text-button font-medium">이메일</p>
					<input
						type="email"
						className="bg-[#fafafa] w-[100%] rounded-[12px] p-[12px] text-button m-[5px]"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<input id="check_btn" type="checkbox" className="hidden" />

				<label htmlFor="check_btn" className="cursor-pointer"></label>

				<style>
					{`
         
                
                input#check_btn + label:before{
                    content:"";
                    display:block;
                    width:16px;
                    height:16px;
                    border:2px solid #e5e5e5;
                    border-radius: 5px;
                    vertical-align:middle;

                }

                input#check_btn:checked + label:before {
                    content: "";
                    background-color: #FFCC00;
                    background-image: url(/assets/images/reserveCheck.svg);
                    background-repeat: no-repeat;
                    background-size: 10px 10px; 
                    background-position: center center;
					border:2px solid #FFCC00;
                    z-index: 9; 
                }

                `}
				</style>

				<p className="text-m m-[10px]">기본 정보로 저장하기</p>
			</div>
		</div>
	);
};

export default PurchaserInfo;
