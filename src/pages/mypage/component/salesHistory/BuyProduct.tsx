import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

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

// 판매완료, 구매 완료 리스트 UI
const BuyProduct = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;

	const [bottom, setBottom] = useState(false);

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

	// 판매 완료 - 판매완료 상품 삭제 API
	const delSalesProd = () => {
		console.log('판매완료 상품 삭제 완료');
		closeBottom();
	};

	const detailClick = (productId: string) => {
		if (currentPath === '/sales') {
			console.log('클릭');
			navigate(`/sales/detail/${productId}`);
		}
	};
	return (
		<>
			<BottomSheet isOpen={bottom} onClose={closeBottom} viewHeight="220px">
				{currentPath === '/sales' ? (
					<ContentTwoBtnPage
						title="판매 정보를 삭제하시겠습니까?"
						leftBtn="취소"
						rightBtn="삭제"
						leftBtnFunc={closeBottom}
						rightBtnFunc={delSalesProd}
					/>
				) : (
					<ContentTwoBtnPage
						title="구매 정보를 삭제하시겠습니까?"
						leftBtn="취소"
						rightBtn="삭제"
						leftBtnFunc={closeBottom}
						rightBtnFunc={delPurchaseProd}
					/>
				)}
			</BottomSheet>

			<div className="p-5">
				<div className="pb-5 flex justify-between items-center ">
					<p className="text-sm pt-[8px]">
						골든티켓 등록번호 {productData.registrationNumber}
					</p>
					<div>
						<img
							src="/assets/images/delete.svg"
							alt="삭제하기"
							className="cursor-pointer"
							onClick={openBottom}
						/>
					</div>
				</div>
				<div className="flex">
					<img
						src={productData.image}
						alt="image"
						className="w-[80px] h-[80px]"
					/>
					<div className="w-[60%] px-[10px]">
						<p className="text-lg font-bold">{productData.productName}</p>
						<div className="flex">
							<p className="text-lg pr-[8px]">{productData.productCondition}</p>
							<div className="flex items-center">
								<div className="border-r-2 border-borderGray h-[12px]"></div>
							</div>
							<p className="text-lg pl-[8px]">
								{productData.productAccommodation}
							</p>
						</div>
						<p className="text-lg font-bold pt-[15px]">{productData.price}</p>
					</div>
					<div className="">
						<div className=" text-sm flex flex-col items-centertext-center justify-between h-[80px]">
							<p className="flex items-center justify-center  bg-main text-white rounded-[10px] w-[55px] h-[20px] p-[5px] ">
								{productData.transactionStatus}
							</p>
							<div className="flex justify-end">
								<ArrowForwardIosIcon
									sx={{ width: '15px' }}
									className="cursor-pointer"
									onClick={() => detailClick(productData.productId)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-b border-borderGray"></div>
		</>
	);
};

export default BuyProduct;
