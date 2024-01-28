import React from 'react';

interface PaymentProps {
	setPayment: React.Dispatch<React.SetStateAction<string>>;
}

const Payment: React.FC<PaymentProps> = ({ setPayment }) => {
	return (
		<div className="px-[10px]">
			<h2 className="text-body font-bold mb-[5px] p-[10px]">결제 수단</h2>
			<div className="text-center flex flex-wrap justify-center text-lg gap-x-[17px] gap-y-[15px]"></div>
		</div>
	);
};

export default Payment;
