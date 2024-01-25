import React from 'react';

interface PaymentProps {
	setPayment: React.Dispatch<React.SetStateAction<string>>;
}

const Payment: React.FC<PaymentProps> = ({ setPayment }) => {
	return (
		<div className="px-[10px]">
			<h2 className="text-body font-bold mb-[5px] p-[10px]">결제 수단</h2>
			<div className="text-center flex flex-wrap justify-center text-lg gap-x-[17px] gap-y-[15px]">
				{/* <input
					type="radio"
					id="credit"
					value="카드결제"
					name="payment"
					className="hidden"
					onChange={(event) => setPayment(event.target.value)}
				/>
				<label
					htmlFor="credit"
					className="flex flex-col justify-center w-[95%] h-[50px] border-[1px] border-[#e5e5e5] rounded-[12px] text-[#828282] bg-[#FAFAFA] hover:bg-[#FFF3C5] hover:text-black hover:font-semibold hover:border-[#FFF3C5] cursor-pointer"
				>
					카드결제
				</label>
				<style type="text/css">
					{`
                        input#credit:checked + label {
                        color: black;
                        background-color: #FFF3C5;
                        border: 1px solid #FFF3C5;
                        }
                    `}
				</style> */}
			</div>
		</div>
	);
};

export default Payment;
