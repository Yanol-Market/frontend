import React from 'react';

interface NegoNotiProps {
	purchaserName: string;
	negoPrice: number;
	setNoti: (value: boolean) => void;
	consent: () => void;
	handleReject: () => void;
}

const NegoNoti: React.FC<NegoNotiProps> = ({
	purchaserName,
	negoPrice,
	setNoti,
	consent,
	handleReject,
}) => {
	return (
		<div className="text-lg">
			<div className="absolute top-0 h-[100%] w-[375px] bg-black opacity-75"></div>
			<div className="animate-slide-up absolute bottom-0 h-[270px] w-[375px] bg-white rounded-t-[20px] leading-tight tracking-tight">
				<div className="text-headline2 m-[30px] text-center leading-[35px]">
					<p>
						<span className="font-medium">{purchaserName}</span> 님이 제안한{' '}
						<br />
						<span className="text-main">
							{negoPrice.toLocaleString('ko-KR')}원
						</span>
						을 <br />
						승인하시겠습니까?
					</p>
				</div>

				<button
					onClick={() => setNoti(false)}
					className="absolute top-[30px] right-[20px]"
				>
					<img src="/assets/images/closeModal.svg" alt="" />
				</button>

				<div className="w-[100%] flex justify-between absolute bottom-0 h-[110px]">
					<div
						onClick={handleReject}
						className="w-[160px] bottom-[25px] text-[#828282] text-lg cursor-pointer ml-[20px] h-[42px] bg-[#e5e5e5] rounded-[12px] flex items-center justify-center"
					>
						거절하기
					</div>
					<div
						onClick={consent}
						className="w-[160px] bottom-[25px] text-lg cursor-pointer mr-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						승인하기
					</div>
				</div>
			</div>
		</div>
	);
};

export default NegoNoti;
