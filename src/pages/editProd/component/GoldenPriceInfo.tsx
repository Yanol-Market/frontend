import React from 'react';
import { formatNumber, formatNumberString } from '../../../utils/formate';

// 404 페이지 추가 후 null 수정 예정
interface GoldenPriceInfoProps {
	goldenPrice: number;
	setGoldenPrice: React.Dispatch<React.SetStateAction<number>>;
	originPrice: number;
	yanoljaPrice: number;
}

const GoldenPriceInfo = ({
	goldenPrice,
	setGoldenPrice,
	originPrice,
	yanoljaPrice,
}: GoldenPriceInfoProps) => {
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
		setGoldenPrice(Number(inputValue));
	};

	return (
		<div>
			{' '}
			<div>
				<h3 className="text-body font-semibold text-black">골든특가 결정</h3>
				<p className="mt-3 text-m">
					하단의 야놀자 판매가를 참고하여 판매 가격을 매겨주세요.
				</p>
				<div className="mt-3 w-[21.0625rem] py-3 mx-auto text-center rounded-lg bg-lightGray flex  flex-col items-center justify-center text-lg">
					<p>
						현재 야놀자는{' '}
						<span className="font-semibold">{formatNumber(yanoljaPrice)}</span>
						원에 팔고 있어요!
					</p>
					<p>
						야놀자에서 구매하신 가격은
						<span className="font-semibold">{formatNumber(originPrice)}</span>원
						입니다.
					</p>
				</div>
				<div className="flex mt-9 text-lg">
					<p className="mt-1">
						희망 판매가
						<span className="text-alarmRed">*</span>
					</p>
					<input
						type="text"
						value={formatNumberString(goldenPrice)}
						onChange={handleInput}
						className="border-b border-borderGray outline-none ml-3 mt-1 w-[14.0625rem] text-center text-descGray pb-2"
					/>
					<p className="ml-2 mt-3">원</p>
				</div>
				<p className="ml-[6.6rem] mt-2 text-descGray text-sm">
					기존 구매가보다 낮은 금액만 입력 가능합니다.
				</p>
			</div>
		</div>
	);
};

export default GoldenPriceInfo;
