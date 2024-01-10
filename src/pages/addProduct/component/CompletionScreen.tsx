// CompletionScreen.tsx
import React from 'react';
import AddProductHeader from './AddProductHeader';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
	onPrevStep: () => void;
}

const CompletionScreen = ({ onPrevStep }: Props) => {
	function handlePrevStep(): void {
		throw new Error('Function not implemented.');
	}

	return (
		<>
			<div className="fixed bg-white top-0 w-[375px] h-[70px] z-20 m-auto flex justify-end items-center">
				<div className="my-auto cursor-pointer pr-5" onClick={onPrevStep}>
					<CloseIcon sx={{ width: '15px', cursor: 'pointer' }} />
				</div>
			</div>
			<div className="w-[375px] fixed top-0 bottom-0 flex flex-col items-center justify-center bg-white">
				<div className="h-[80%] flex flex-col items-center justify-center">
					<img src="/assets/images/check.svg" alt="" />
					<h2 className="text-body font-light	my-[20px]">상품 등록 완료! </h2>
					<p className="text-center text-m text-[#828282] font-thin leading-[1.5rem] tracking-wide">
						정산을 위해 필요한 계좌를 등록해주세요.
					</p>
				</div>
			</div>
		</>
	);
};

export default CompletionScreen;
