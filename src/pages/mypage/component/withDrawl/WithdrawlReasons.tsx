import React, { useEffect } from 'react';

import { withdrawlReasonsData } from '../../../../data/withdrawlReasonsData';
import { CloseFuncProps } from '../region/SelectBanks';
import { useRecoilState } from 'recoil';
import { withDrawlState } from '../../../../recoil/atom';

const WithdrawlReasons = ({ closeFunc }: CloseFuncProps) => {
	const [selectReason, setSelectReason] = useRecoilState(withDrawlState);
	const handleSelectReason = (reason: string) => {
		setSelectReason(reason);
		closeFunc();
	};
	useEffect(() => {
		console.log(selectReason);
	}, [selectReason]);
	return (
		<div className="overflow-y-auto max-h-[100vh] scrollbar-hide">
			<p className="text-center mb-7">탈퇴 사유 선택</p>
			{withdrawlReasonsData.map((reason) => (
				<div
					key={reason.id}
					className="flex flex-col mb-5 cursor-pointer"
					onClick={() => handleSelectReason(reason.withdrawlReason)}
				>
					<p className="mt-1">{reason.withdrawlReason}</p>
				</div>
			))}
		</div>
	);
};

export default WithdrawlReasons;
