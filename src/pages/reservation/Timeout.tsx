import React from 'react';
import { Header } from '../../component/common/Header';

const Timeout = () => {
	return (
		<div className="h-screen ">
			<Header title={'결제하기'} />
			<div className="h-[80%] flex flex-col items-center justify-center">
				<img src="/assets/images/clock.svg" alt="" />
				<h2 className="text-body font-light	my-[20px]">
					아쉽지만 결제 가능한 시간이 지났어요
				</h2>
				<p className="text-center text-m text-[#828282] leading-[1.2rem] tracking-wide">
					골든티켓은 네고 승인된 상품을 <strong>20분간</strong> 예약해드리고
					있습니다. <br />
					아직 <strong>판매 중</strong>인 상품이라면 <strong>재결제</strong>가
					가능합니다.
				</p>
			</div>
			<div className="m-[20px]">
				<button className="w-[100%] h-[50px] bg-main rounded-[12px] text-white text-lg">
					채팅창 이동
				</button>
			</div>
		</div>
	);
};

export default Timeout;
