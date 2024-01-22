import React from 'react';
import tw from 'twin.macro';
import { StatusBarProps } from '../../../../data/purchasesData';

const StatusBar = ({ status }: StatusBarProps) => {
	const data = status;
	console.log(data, 'ddd');

	return (
		<>
			<div className="pt-6">
				<div className="flex justify-between text-m  items-center">
					{data === null ? (
						<Rounded>네고|예약</Rounded>
					) : (
						<ClickRounded>네고|예약</ClickRounded>
					)}

					<Line />
					{data === 'PAYMENT_PENDING' || data === 'TRANSFER_PENDING' ? (
						<ClickRounded>결제 진행</ClickRounded>
					) : (
						<Rounded>결제 진행</Rounded>
					)}
					<Line />
					{data === 'TRANSFER_PENDING' ? (
						<ClickRounded>양도 대기</ClickRounded>
					) : (
						<Rounded>양도 대기</Rounded>
					)}
					<Line />
					<Rounded>양도 완료</Rounded>
				</div>
			</div>
		</>
	);
};

export default StatusBar;

const ClickRounded = tw.div`
px-2 bg-main py-2 rounded-full text-white
`;

const Rounded = tw.div`
px-2 border-2 border-borderGray py-2 rounded-full
`;

const Line = tw.div`
flex-1 h-[2px] bg-main
`;
