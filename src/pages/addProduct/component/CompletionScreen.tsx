import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
	onComplete: () => void;
}

const CompletionScreen = ({ onComplete }: Props) => {
	const navigate = useNavigate();

	const handleProductCheckClick = () => {
		navigate('/sales');
	};

	const handleAccountRegistrationClick = () => {
		navigate('/myaccount');
	};

	return (
		<>
			<div className="fixed bg-white top-0 w-[375px] h-[70px] z-20 m-auto flex justify-end items-center">
				<div className="my-auto cursor-pointer pr-5" onClick={onComplete}>
					<CloseIcon sx={{ width: '20px' }} />
				</div>
			</div>
			<div className="w-[375px] fixed top-0 bottom-0 flex flex-col items-center justify-center bg-white z-10">
				<div className="h-[80%] flex flex-col items-center justify-center">
					<img src="/assets/images/check.svg" alt="" />
					<h2 className="text-body font-light	my-[20px]">상품 등록 완료! </h2>
					<p className="text-center text-m text-descGray font-thin leading-[1.5rem] tracking-wide">
						정산을 위해 필요한 계좌를 등록해주세요.
					</p>
				</div>
				<div className="flex flex-row gap-2 mt-11 text-lg">
					<button
						className="bg-dateBlue w-40 h-11 rounded-xl text-white"
						onClick={handleProductCheckClick}
					>
						등록된 상품 확인하기
					</button>
					<button
						className="bg-main w-40 h-11 rounded-xl text-white"
						onClick={handleAccountRegistrationClick}
					>
						내 계좌 등록하기
					</button>
				</div>
			</div>
		</>
	);
};

export default CompletionScreen;
