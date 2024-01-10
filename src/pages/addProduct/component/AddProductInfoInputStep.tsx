import React, { useState } from 'react';
import GoldenPriceDecision from './GoldenPriceDecision';
import SellerInfoInput from './SellerInfoInput';
import CommissionInfo from './CommissionInfo';

interface Props {
	onNextStep: () => void;
	onPrevStep: () => void;
}

const AddProductInfoInputStep = ({ onPrevStep, onNextStep }: Props) => {
	const [desiredPrice, setDesiredPrice] = useState<number>(0);

	function setSellerInfo(info: string): void {
		throw new Error('Function not implemented.');
	}

	return (
		<div>
			<div className="fixed top-[6rem] w-[375px] bg-white h-[3rem]" />
			<h2 className="text-body ml-5 mb-4 fixed top-[6.5rem]">판매 정보 입력</h2>
			<div className="fixed top-[9rem] w-[375px] h-[0.4375rem] bg-[#FAFAFA]" />

			<p>Checking if this text is visible</p>

			<div className="mt-[9.5rem] mx-5 text-black">
				<GoldenPriceDecision
					currentSellingPrice={100000}
					onPriceChange={(newPrice) => setDesiredPrice(newPrice)}
				/>
			</div>
			<div className="mt-[2rem] w-[375px] h-[0.4375rem] bg-[#FAFAFA]" />
			<div className="mx-5 text-black">
				<SellerInfoInput onSellerInfoChange={(info) => setSellerInfo(info)} />
			</div>
			{/* 수수료 안내 컴포넌트 */}
			<div className="mx-5 text-black">
				<CommissionInfo desiredPrice={desiredPrice} />
			</div>
			{/* 다음 버튼 */}
			<div className="bg-gray-200 flex justify-center">
				<button
					type="button"
					className="mx-auto bg-borderGray w-[20.9375rem] h-[3.125rem] rounded-xl text-[#828282] cursor-pointer text-lg mt-[3.5625rem] mb-[2.1875rem]"
					onClick={onNextStep}
				>
					다음
				</button>
			</div>
		</div>
	);
};

export default AddProductInfoInputStep;
