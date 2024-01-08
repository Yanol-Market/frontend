import React from 'react';

import { withdrawlReasonsData } from '../../../data/withdrawlReasonsData';

const WithdrawlReasons = () => {
	return (
		<div className="overflow-y-auto max-h-[100vh] scrollbar-hide">
			<p className="text-center mb-7">탈퇴 사유 선택</p>
			{withdrawlReasonsData.map((reason) => (
				<div key={reason.id} className="flex flex-col mb-5">
					<p className="mt-1">{reason.withdrawlReason}</p>
				</div>
			))}
		</div>
	);
};

export default WithdrawlReasons;
