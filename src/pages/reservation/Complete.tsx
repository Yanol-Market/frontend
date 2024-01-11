import React from 'react';
import { Header } from '../../component/common/Header';

const Complete = () => {
	return (
		<div className="h-screen">
			<Header title={'결제하기'} />
			<div className="h-[80%] flex flex-col items-center justify-center">
				<img src="/assets/images/bills.svg" alt="" />
				<h2 className="text-body font-light	my-[20px]">
					결제가 완료되었습니다!
				</h2>
				<p className="text-center text-m text-[#828282] font-thin leading-[1.5rem] tracking-wide">
					판매자에게 양도 요청이 전달되었습니다. <br />
					판매자가 양도 취소 시에는 결제금액이 100% 환불됩니다.
				</p>
			</div>
			<div className="m-[20px]">
				<button className="w-[100%] h-[50px] bg-main rounded-[12px] text-white text-lg">
					확인
				</button>
			</div>
		</div>
	);
};

export default Complete;
