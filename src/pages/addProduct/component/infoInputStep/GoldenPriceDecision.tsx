import React, { useState } from 'react';

interface GoldenPriceDecisionProps {
	originPrice: string | null;
	yanoljaPrice: string | null;
	setGoldenPrice: React.Dispatch<React.SetStateAction<number>>;
}

const addCommas = (value: string | null): string => {
	if (!value) return '';
	const numberValue = Number(value);
	if (isNaN(numberValue)) return '';

	return numberValue.toLocaleString();
};

const GoldenPriceDecision = ({
	yanoljaPrice,
	originPrice,
	setGoldenPrice,
}: GoldenPriceDecisionProps) => {
	const [formattedYanoljaPrice, setFormattedYanoljaPrice] = useState<string>();

	const handleYanoljaPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value.replace(/,/g, ''); // 콤마 제거
		const numericValue = Number(rawValue);

		if (!isNaN(numericValue)) {
			setFormattedYanoljaPrice(addCommas(rawValue));
			setGoldenPrice(numericValue);
		} else {
			setFormattedYanoljaPrice(''); // 값이 유효하지 않으면 빈 문자열로 설정
		}
	};
	return (
		<div>
			<h3 className="text-body font-semibold text-black">골든특가 결정</h3>
			<p className="mt-3 text-m">
				하단의 야놀자 판매가를 참고하여 판매 가격을 매겨주세요.
			</p>
			<div className="p-[0.9375rem] mt-3 w-[21.0625rem] mx-auto text-center bg-lightGray flex flex-col items-center justify-center text-lg">
				<p>
					현재 야놀자는
					<span className="font-semibold">
						{' '}
						{yanoljaPrice && Number(yanoljaPrice).toLocaleString()}
					</span>
					원에 팔고 있어요!
				</p>
				<p>
					야놀자에서 구매하신 가격은{' '}
					<span className="font-semibold">
						{' '}
						{originPrice && Number(originPrice).toLocaleString()}
					</span>
					원 입니다.
				</p>
			</div>
			<div className="flex mt-9 text-lg">
				<p className="mt-1">
					희망 판매가
					<span className="text-alarmRed">*</span>
				</p>
				<input
					type="text" // type을 text로 변경
					placeholder={`기존구매가 ${addCommas(originPrice)}`}
					value={formattedYanoljaPrice}
					onChange={handleYanoljaPriceChange}
					className="border-b border-borderGray outline-none ml-3 mt-1 w-[14.0625rem] text-center text-descGray pb-2"
				/>
				<p className="ml-2 mt-3">원</p>
			</div>
			<p className="ml-[6.6rem] mt-2 text-descGray text-sm">
				기존 구매가보다 낮은 금액만 입력 가능합니다.
			</p>
		</div>
	);
};

export default GoldenPriceDecision;
