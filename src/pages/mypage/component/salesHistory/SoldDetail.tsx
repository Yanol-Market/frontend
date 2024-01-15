import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import CardProd from './CardProd';

const SoldDetail = () => {
	const [bottom, setBottom] = useState(false);

	const openBottom = () => {
		setBottom(true);
	};

	const closeBottom = () => {
		setBottom(false);
	};

	// 판매완료 상세 - 판매완료 삭제 API
	const dltProduct = () => {
		console.log('판매 완료 상품 삭제 완료');
		closeBottom();
	};

	return (
		<div className="p-5">
			<BottomSheet isOpen={bottom} onClose={closeBottom} viewHeight="220px">
				<ContentTwoBtnPage
					title="판매 정보를 삭제하시겠습니까?"
					leftBtn="취소"
					rightBtn="삭제"
					leftBtnFunc={closeBottom}
					rightBtnFunc={dltProduct}
				/>
			</BottomSheet>
			<div className="pb-5 flex justify-between items-center">
				<p className="text-sm ">골든티켓 등록번호 4568784156165</p>
				<div>
					<img
						src="/assets/images/delete.svg"
						alt="삭제하기"
						className="cursor-pointer"
						onClick={openBottom}
					/>
				</div>
			</div>

			<CardProd />
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
