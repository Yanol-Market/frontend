import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useQueryBoughtList } from '../../../../hooks/useQueryPurchases';
import { BoughtProd } from '../../../../data/purchasesData';
const productData: ProductData = {
	productId: '545487548754',
	registrationNumber: 202401051119,
	image: '/assets/images/reserveRoom.svg',
	productName: '에코그린 리조트 호텔',
	productCondition: '디럭스 더블',
	productAccommodation: '2인/최대 2인',
	productStatus: '숙박',
	transactionStatus: '판매완료',
	price: '210,000원',
	checkIn: '2024-01-28(일) 15:00',
	checkOut: '2024-01-30(화) 15:00',
};

interface ProductData {
	productId: string;
	registrationNumber: number;
	image: string;
	productName: string;
	productCondition: string;
	productAccommodation: string;
	productStatus: string;
	transactionStatus: string;
	price: string;
	checkIn: string;
	checkOut: string;
}

const BoughtListProd = () => {
	const { isLoading, error, data } = useQueryBoughtList();
	console.log('구매완료', data);

	const [bottom, setBottom] = useState(false);
	const navigate = useNavigate();

	const openBottom = () => {
		setBottom(true);
	};

	const closeBottom = () => {
		setBottom(false);
	};

	// 구매 완료 - 구매완료 상품 삭제 API
	const delPurchaseProd = () => {
		console.log('구매완료 상품 삭제 완료');
		closeBottom();
	};

	const detailClick = (productId: string) => {
		console.log('클릭');
		navigate(`/purchase/detail/${productId}`);
	};

	if (isLoading) {
		return <div> isLoading </div>;
	}

	if (error) {
		return <div> error </div>;
	}

	if (data) {
		return (
			<div>
				{' '}
				{data.map((item: BoughtProd) => (
					<div
						key={item.productId}
						className="p-5 pb-8 border-borderWhite border-b-[1px]"
					>
						<div className="pb-5 flex justify-between items-center ">
							<p className="text-sm ">골든티켓 등록번호 {item.productId}</p>
							<div>
								<img
									src="/assets/images/delete.svg"
									alt="삭제하기"
									className="cursor-pointer "
									onClick={openBottom}
								/>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex">
								<img
									src={item.accommodationImage}
									alt="image"
									className="w-[80px] h-[80px]"
								/>
								<div className="px-[10px]">
									<div className="flex items-center ">
										{' '}
										<p className="text-lg font-bold">
											{item.accommodationName}
										</p>
										<p className=" text-m text-gray pl-2">1년전</p>
									</div>

									<div className="flex">
										<p className="text-lg pr-[8px]">{item.roomName}</p>
										<div className="flex items-center">
											<div className="border-r-2 border-borderGray h-[12px]"></div>
										</div>
										<p className="text-lg pl-[8px]">
											{item.standardNumber}인/최대{item.maximumNumber}
										</p>
									</div>
									<p className="text-lg font-bold pt-[15px]">
										{item.goldenPrice}원
									</p>
								</div>
							</div>

							<div className="flex justify-end h-[80px] items-end">
								<ArrowForwardIosIcon
									sx={{ width: '15px' }}
									className="cursor-pointer"
									onClick={() => detailClick(String(item.productId))}
								/>
							</div>
						</div>
					</div>
				))}
				<BottomSheet isOpen={bottom} onClose={closeBottom} viewHeight="220px">
					<ContentTwoBtnPage
						title="구매 정보를 삭제하시겠습니까?"
						leftBtn="취소"
						rightBtn="삭제"
						leftBtnFunc={closeBottom}
						rightBtnFunc={delPurchaseProd}
					/>
				</BottomSheet>
			</div>
		);
	}
	return <div> 아무것도 없는 페이지 </div>;
};

export default BoughtListProd;
