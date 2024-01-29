import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const CompletionEdit = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/purchase');
	};
	return (
		<div className="flex flex-col justify-between h-lvh ">
			<div className="  w-full h-[70px] bg-white  flex justify-end items-center">
				<div className="cursor-pointer pr-5">
					<CloseIcon sx={{ width: '20px' }} />
				</div>
			</div>

			<div className="h-[180px] flex flex-col items-center justify-center pb-16">
				<img src="/assets/images/check.svg" alt="" />
				<h2 className="text-body font-light	my-[20px]">상품 정보 수정 완료!</h2>
			</div>

			<div className=" px-5 mb-[50px] h-[80px]">
				<button
					onClick={handleClick}
					className="bg-main  text-white flex items-center justify-center h-[50px] w-full rounded-lg mt-5"
				>
					수정 된 상품 확인하기
				</button>
			</div>
		</div>
	);
};

export default CompletionEdit;
