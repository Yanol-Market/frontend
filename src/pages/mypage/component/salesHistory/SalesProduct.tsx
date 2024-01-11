import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation } from 'react-router-dom';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';

const productData: ProductData = {
	registrationNumber: 202401051119,
	image: '/assets/images/reserveRoom.svg',
	productName: '에코그린 리조트 호텔',
	productCondition: '디럭스 더블',
	productAccommodation: '2인/최대 2인',
	productStatus: '숙박',
	price: '210,000원',
	checkIn: '2024-01-28(일) 15:00',
	checkOut: '2024-01-30(화) 15:00',
};

interface ProductData {
	registrationNumber: number;
	image: string;
	productName: string;
	productCondition: string;
	productAccommodation: string;
	productStatus: string;
	price: string;
	checkIn: string;
	checkOut: string;
}

const SalesProduct = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const [bottom, setBottom] = useState(false);

	const openBottom = () => {
		setBottom(true);
	};

	const closeBottom = () => {
		setBottom(false);
	};

	// 구매중 - 구매 상품 삭제 API
	const dltProduct = () => {
		console.log('상품 삭제 완료');
		closeBottom();
	};
	console.log(currentPath);
	return (
		<>
			<div>
				<BottomSheet isOpen={bottom} onClose={closeBottom} viewHeight="220px">
					<ContentTwoBtnPage
						title="구매 정보를 삭제하시겠습니까?"
						leftBtn="취소"
						rightBtn="삭제"
						leftBtnFunc={closeBottom}
						rightBtnFunc={dltProduct}
					/>
				</BottomSheet>
				<div className="pb-5 flex justify-between items-center">
					<p className="text-sm pt-[8px]">
						골든티켓 등록번호 {productData.registrationNumber}
					</p>
					<div>
						{currentPath === '/purchase' ? (
							<img
								src="/assets/images/delete.svg"
								alt="삭제하기"
								className="cursor-pointer"
								onClick={openBottom}
							/>
						) : (
							<MoreVertIcon
								sx={{ width: '13px', color: '#BDBDBD' }}
								className="cursor-pointer"
							/>
						)}
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
					<div className="text-sm">
						<div
							className={`flex flex-col justify-center items-center rounded-[10px] w-[35px] h-[20px] p-[5px] text-center ${
								currentPath === '/purchase'
									? 'bg-homeMain'
									: 'bg-lightGray border-[1px] border-[#e0e0e0]'
							}`}
						>
							<p className="">{productData.productStatus}</p>
						</div>
					</div>
				</div>
				<div className="mt-[20px] mb-[10px] flex justify-around text-center text-m bg-lightGray p-[10px] rounded-[10px]">
					<div>
						<p className="font-bold mb-[5px]">체크인</p>
						<p>{productData.checkIn}</p>
					</div>
					<div className="p-10px border-r-[1px] border-[#e0e0e0] h-[40px]"></div>
					<div>
						<p className="font-bold mb-[5px]">체크아웃</p>
						<p>{productData.checkOut}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SalesProduct;
