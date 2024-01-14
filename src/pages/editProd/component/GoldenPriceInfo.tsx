import React from 'react';

// 404 페이지 추가 후 null 수정 예정
interface GoldenPriceInfoProps {
	setGoldenPrice: React.Dispatch<React.SetStateAction<number>>;
	originPrice: string | null;
	yanoljaPrice: string | null;
}

const GoldenPriceInfo = ({
	setGoldenPrice,
	originPrice,
	yanoljaPrice,
}: GoldenPriceInfoProps) => {
	return (
		<div>
			{' '}
			<div>
				<h3 className="text-body font-semibold text-black">골든특가 결정</h3>
				<p className="mt-3 text-m">
					하단의 야놀자 판매가를 참고하여 판매 가격을 매겨주세요.
				</p>
				<div className="mt-3 w-[21.0625rem] h-[3.125rem] mx-auto text-center bg-lightGray flex items-center justify-center text-lg">
					<p>
						현재 야놀자는 <span className="font-semibold">{yanoljaPrice}</span>
						원에 팔고 있어요!
					</p>
				</div>
				<div className="flex mt-9 text-lg">
					<p className="mt-1">
						희망 판매가
						<span className="text-alarmRed">*</span>
					</p>
					<input
						type="number"
						placeholder={`기존구매가 ${originPrice}`}
						onChange={(e) => setGoldenPrice(Number(e.target.value))}
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
