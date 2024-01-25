import React, { useState } from 'react';
import Product from './Product';
import PurchaserInfo from './PurchaserInfo';
import Total from './Total';
import Payment from './Payment';
import TermSheet from './TermSheet';
import { Header } from '../../component/common/Header';

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
			<div className="mx-[20px] my-[20px] h-[50px] bg-main text-white text-center p-[15px] text-lg rounded-xl">
				<button className="w-[100%]" onClick={() => setTermSheet(true)}>
					카드결제
				</button>
			</div>
			<div className="mb-[20px] h-[20px]"></div>
			{termSheet ? <TermSheet setTermSheet={setTermSheet} /> : null}
		</div>
	);
};

export default ReservationPage;
