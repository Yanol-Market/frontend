import React from 'react';
import { Header } from '../../component/common/Header';
import { useLocation, useNavigate } from 'react-router-dom';

const Failure = () => {
	const navigate = useNavigate();

	return (
		<div className="h-screen ">
			<Header title={'결제하기'} />
			<div className="h-[80%] flex flex-col items-center justify-center">
				<img src="/assets/images/error.svg" alt="" />
				<h2 className="text-body font-light	my-[20px]">결제에 문제가 있어요</h2>
				<p className="text-center text-m text-[#828282] leading-[1.1rem] tracking-wide">
					선택한 결제수단 정보가 맞는지 판매 중인 상품인지 <br />
					다시 한 번 확인하신 후 결제를 시도해주세요.
				</p>
			</div>
			<div className="flex gap-[15px] m-[20px]">
				<button
					onClick={() => navigate('/')}
					className="w-full h-[50px] bg-[#004EAF] rounded-[12px] text-white text-lg"
				>
					확인
				</button>
			</div>
		</div>
	);
};

export default Failure;
