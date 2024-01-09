import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
	return (
		<>
			<div>
				<div className="pb-5 flex justify-between">
					<p className="text-sm pt-[8px]">
						골든티켓 등록번호 {productData.registrationNumber}
					</p>
					<div>
						<MoreVertIcon sx={{ width: '13px', color: '#BDBDBD' }} />
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
						<div className="flex flex-col justify-center items-center bg-lightGray rounded-[10px] w-[35px] h-[20px] p-[5px] text-center border-[1px] border-[#e0e0e0]">
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
