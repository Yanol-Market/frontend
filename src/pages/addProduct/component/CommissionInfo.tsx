import React from 'react';

interface CommissionInfoProps {
	desiredPrice: number;
}

const CommissionInfo: React.FC<CommissionInfoProps> = ({ desiredPrice }) => {
	// 골든티켓 수수료율
	const commissionRate = 5;

	// 골든티켓 수수료 계산
	const commissionAmount = (desiredPrice * commissionRate) / 100;

	// 예상 최종 정산액 계산
	const finalSettlementAmount = desiredPrice - commissionAmount;

	return (
		<div className="mt-5">
			<h3 className="text-body font-semibold text-black">수수료 안내</h3>
			<div className="mt-4 rounded-md bg-bgMain p-4 text-lg">
				<p className="flex justify-between">
					<span>희망 판매가</span>
					<span className="font-semibold">{desiredPrice}원</span>
				</p>
				<p className="flex justify-between mt-2">
					<span>골든티켓 수수료</span>{' '}
					<span className="font-semibold">
						-{commissionAmount}원 ({commissionRate}%)
					</span>
				</p>
				<p className="flex justify-between font-semibold text-dateBlue mt-2">
					<span>예상 최종 정산액</span>{' '}
					<span className="font-semibold">{finalSettlementAmount}원</span>
				</p>
			</div>
		</div>
	);
};

export default CommissionInfo;
