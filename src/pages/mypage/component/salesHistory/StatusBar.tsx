import React from 'react';
import tw from 'twin.macro';

const StatusBar = () => {
	return (
		<>
			<div className="pt-6">
				<div className="flex justify-between text-m  items-center">
					<ClickRounded>네고|예약</ClickRounded>
					<Line />
					<Rounded>결제 진행</Rounded>
					<Line />
					<Rounded>양도 대기</Rounded>
					<Line />
					<Rounded>양도 완료</Rounded>
				</div>
			</div>
		</>
	);
};

export default StatusBar;

const ClickRounded = tw.div`
px-2 bg-main py-2 rounded-full
`;

const Rounded = tw.div`
px-2 border-2 border-borderGray py-2 rounded-full
`;

const Line = tw.div`
flex-1 h-[2px] bg-main
`;
