import React from 'react';
import { bankData } from '../../../../data/bankData';
import { useRecoilState } from 'recoil';
import { SelectBanksProps, checkedBankState } from '../../../../recoil/atom';

const SelectBanks = () => {
	const [selectBank, setSelectBank] = useRecoilState(checkedBankState);
	const handleSelectBanks = (bank: SelectBanksProps) => {
		setSelectBank(bank);
	};
	// useEffect(() => {
	// 	console.log(selectBank);
	// }, [selectBank]); // useEffect 안 쓰면 console.log가 두 번 실행됨.

	return (
		<div className="overflow-scroll h-full scrollbar-hide">
			<p className="text-center mb-7">은행 선택</p>
			{bankData.map((bank) => (
				<div
					key={bank.id}
					className="flex flex-row mb-4 cursor-pointer"
					onClick={() => handleSelectBanks(bank)}
				>
					<img className="w-8 h-8 mr-2" src={bank.image} alt="은행 이미지" />
					<p className="mt-1">{bank.bankName}</p>
				</div>
			))}
		</div>
	);
};

export default SelectBanks;
