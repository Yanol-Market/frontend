import React from 'react';
import { useRecoilValue } from 'recoil';
import { paymentsState } from '../../recoil/atom';

const Total = () => {
	const payData = useRecoilValue(paymentsState);

	return (
		<div className="p-[20px]">
			<h2 className="text-body font-bold mb-[5px]">결제 정보</h2>
			<div className="bg-[#FFFAEB] p-[20px] text-button rounded-[12px] mt-[20px]">
				<div className="flex justify-between">
					<p>상품 금액</p>
					<p className="font-bold">
						{payData?.price.toLocaleString('ko-KR')}원
					</p>
				</div>
				<div className="flex justify-between my-[10px]">
					<p>결제 수수료</p>
					<p className="font-bold">{payData?.fee.toLocaleString('ko-KR')}원</p>
				</div>
				<div className="flex justify-between text-[#004EAF] font-bold">
					<p>최종 결제액</p>
					<p className="font-bold">
						{payData?.totalPrice.toLocaleString('ko-KR')}원
					</p>
				</div>
			</div>
			<p className="text-m p-[10px] text-right">
				골든 티켓을 통해{' '}
				<strong>{payData?.savingPrice.toLocaleString('ko-KR')}</strong>
				원을 절약했어요!
			</p>
		</div>
	);
};

export default Total;
