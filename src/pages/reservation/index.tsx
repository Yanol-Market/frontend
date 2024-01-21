import React, { useState } from 'react';
import Product from './Product';
import PurchaserInfo from './PurchaserInfo';
import Total from './Total';
import Payment from './Payment';
import TermSheet from './TermSheet';
import { Header } from '../../component/common/Header';
import { useQuery } from '@tanstack/react-query';


const ReservationPage = () => {
	const [payment, setPayment] = useState('');
	const [termSheet, setTermSheet] = useState(false);
	const isDisabled = !!payment;

	console.log(payment, isDisabled, termSheet);


	return (
		<div className="relative">
			<Header title="결제하기" />
			<Product />
			<PurchaserInfo />
			<Total />
			<Payment setPayment={setPayment} />
			<div
				className={`mx-[20px] my-[20px] h-[50px] text-center p-[15px] text-lg ${
					isDisabled ? 'text-white' : 'text-black'
				} text-[#828282] rounded-[12px] ${
					isDisabled ? 'bg-[#FFCC00]' : 'bg-[#e5e5e5]'
				}`}
			>
				<button
					className="w-[100%]"
					disabled={!isDisabled}
					onClick={() => setTermSheet(true)}
				>
					다음
				</button>
			</div>
			<div className="mb-[20px] h-[20px]"></div>
			{termSheet ? <TermSheet setTermSheet={setTermSheet} /> : null}
		</div>
	);
};

export default ReservationPage;
