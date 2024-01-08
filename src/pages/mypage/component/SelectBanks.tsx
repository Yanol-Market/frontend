import React from 'react';
import { bankData } from '../../../data/bankData';

const SelectBanks = () => {
	return (
		<div className="overflow-y-auto max-h-[100vh] scrollbar-hide">
			<p className="text-center mb-7">은행 선택</p>
			{bankData.map((bank) => (
				<div key={bank.id} className="flex flex-row mb-5">
					<img className="w-8 h-8 mr-2" src={bank.image} alt="은행 이미지" />
					<p className="mt-1">{bank.bankName}</p>
				</div>
			))}
		</div>
	);
};

export default SelectBanks;
