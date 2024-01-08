import React from 'react';

interface PaymentProps {
	setPayment: React.Dispatch<React.SetStateAction<string>>;
}

const Payment: React.FC<PaymentProps> = ({ setPayment }) => {
	return (
		<div className="px-[10px]">
			<h2 className="text-body font-bold mb-[5px] p-[10px]">결제 수단</h2>
			<div className="text-center flex flex-wrap justify-center text-button gap-x-[17px] gap-y-[15px]">
				<input
					type="radio"
					id="credit"
					value="카드결제"
					name="payment"
					className="hidden"
					onChange={(event) => setPayment(event.target.value)}
				/>
				<label
					htmlFor="credit"
					className="flex flex-col justify-center w-[45%] h-[50px] border-[1px] border-[#e5e5e5] rounded-[12px] text-[#828282] bg-[#FAFAFA] hover:bg-[#FFF3C5] hover:text-black hover:font-semibold hover:border-[#FFF3C5]"
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
				</style>
				<input
					type="radio"
					id="mobile"
					value="휴대폰결제"
					name="payment"
					className="hidden"
					onChange={(event) => setPayment(event.target.value)}
				/>
				<label
					htmlFor="mobile"
					className="flex flex-col justify-center w-[45%] h-[50px] border-[1px] border-[#e5e5e5] rounded-[12px] text-[#828282] bg-[#FAFAFA] hover:bg-[#FFF3C5] hover:text-black hover:font-semibold hover:border-[#FFF3C5]"
				>
					휴대폰 결제
				</label>
				<style type="text/css">
					{`
                        input#mobile:checked + label {
                        color: black;
                        background-color: #FFF3C5;
                        border: 1px solid #FFF3C5;
                        }
                    `}
				</style>
				<input
					type="radio"
					id="virtual"
					value="가상계좌"
					name="payment"
					className="hidden"
					onChange={(event) => setPayment(event.target.value)}
				/>
				<label
					htmlFor="virtual"
					className="flex flex-col justify-center w-[45%] h-[50px] border-[1px] border-[#e5e5e5] rounded-[12px] text-[#828282] bg-[#FAFAFA] hover:bg-[#FFF3C5] hover:text-black hover:font-semibold hover:border-[#FFF3C5]"
				>
					가상계좌
				</label>
				<style type="text/css">
					{`
                        input#virtual:checked + label {
                        color: black;
                        background-color: #FFF3C5;
                        border: 1px solid #FFF3C5;
                        }
                    `}
				</style>
				<input
					type="radio"
					id="transfer"
					value="실시간계좌이체"
					name="payment"
					className="hidden"
					onChange={(event) => setPayment(event.target.value)}
				/>
				<label
					htmlFor="transfer"
					className="flex flex-col justify-center w-[45%] h-[50px] border-[1px] border-[#e5e5e5] rounded-[12px] text-[#828282] bg-[#FAFAFA] hover:bg-[#FFF3C5] hover:text-black hover:font-semibold hover:border-[#FFF3C5]"
				>
					실시간 계좌 이체
				</label>
				<style type="text/css">
					{`
                        input#transfer:checked + label {
                        color: black;
                        background-color: #FFF3C5;
                        border: 1px solid #FFF3C5;
                        }
                    `}
				</style>
			</div>
		</div>
	);
};

export default Payment;
