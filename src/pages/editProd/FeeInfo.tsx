import React from 'react';

interface FeeInfoProps {
	goldenPrice: number;
}

const FeeInfo = ({ goldenPrice }: FeeInfoProps) => {
	// 골든티켓 수수료 계산
	const commissionAmount = (goldenPrice * 5) / 100;

	// 예상 최종 정산액 계산
	const finalSettlementAmount = goldenPrice - commissionAmount;

	return (
		<div className="mt-5">
			<h3 className="text-body font-semibold text-black">수수료 안내</h3>
			<div className="mt-4 rounded-md bg-bgMain p-4 text-lg">
				<p className="flex justify-between">
					<span>희망 판매가</span>
					<span className="font-semibold">{goldenPrice}원</span>
				</p>
				<p className="flex justify-between mt-2">
					<span>골든티켓 수수료</span>
					<span className="font-semibold">-{commissionAmount}원 (5%)</span>
				</p>
				<p className="flex justify-between font-semibold text-dateBlue mt-2">
					<span>예상 최종 정산액</span>
					<span className="font-semibold">{finalSettlementAmount}원</span>
				</p>
			</div>
		</div>
	);
};

export default FeeInfo;
