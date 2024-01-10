import React from 'react';
import SalesProduct from './SalesProduct';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SoldDetail = () => {
	return (
		<div className="p-5">
			<SalesProduct />
			<div>
				<div className="text-body py-4 font-bold ">거래 정보</div>{' '}
				<div className="flex justify-between items-center text-lg pb-2">
					<div> 구매자 닉네임</div>
					<div>강릉여행자</div>
				</div>
				<div className="flex justify-between items-center text-lg  pb-2">
					<div> 거래일시</div>
					<div>2023.12.24 13.24</div>
				</div>
				<div className="flex justify-between items-center text-lg  pb-2">
					<div> 정산일시</div>
					<div>2023.12.24 13.24</div>
				</div>
				<div className="flex justify-between items-center text-lg  pb-2">
					<div className="flex items-center">
						<div>수수료</div>
						<div className="text-descGray text-m pl-1">(판매금 5%)</div>
					</div>
					<div>4,800원</div>
				</div>
				<div className="flex justify-between items-center text-lg  pb-2">
					<div> 정산금액</div>
					<div>91,200원</div>
				</div>
			</div>
			<div className="text-body py-4 font-bold ">나의 거래</div>
			<div className="border-borderGray border px-5 py-4 mt-2 flex items-center  justify-between rounded-lg">
				<div className="flex items-center">
					<div>
						<img src="/assets/images/userDefault.svg" alt="userDefault" />
					</div>
					<div className="text-lg px-3"> 강릉 여행자 </div>
					<div className="text-m text-descGray"> 5분전</div>
				</div>

				<div className="flex items-center">
					<div className="font-bold pr-3">96,000</div>
					<div>
						<ArrowForwardIosIcon
							sx={{ width: '15px' }}
							className="cursor-pointer"
						/>
					</div>{' '}
				</div>
			</div>
		</div>
	);
};

export default SoldDetail;
