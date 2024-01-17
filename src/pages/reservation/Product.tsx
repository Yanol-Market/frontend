import React from 'react';

const productData: PayMentProps = {
	orderId: 1,
	productId: 1,
	imageUrl: '/assets/images/reserveRoom.svg',
	accommodationName: '에코그린 리조트 호텔',
	roomName: '디럭스 더블',
	reservationType: '숙박',
	standardNumber: 1,
	maximumNumber: 2,
	checkInDate: '2024-01-12',
	checkInTime: '18:15:42.1989478',
	checkOutDate: '2024-01-13',
	checkOutTime: '19:15:42.1989478',
	userName: 'test',
	phoneNumber: '010-1234-5678',
	email: 'test@mail',
	price: 1000,
	fee: 50,
	totalPrice: 1050,
	registrationNumber: 202401051119,
};

interface PayMentProps {
	orderId: number;
	productId: number;
	imageUrl: string;
	accommodationName: string;
	roomName: string;
	reservationType: string;
	standardNumber: number;
	maximumNumber: number;
	checkInDate: string;
	checkInTime: string;
	checkOutDate: string;
	checkOutTime: string;
	userName: string;
	phoneNumber: string;
	email: string;
	price: number;
	fee: number;
	totalPrice: number;
	registrationNumber: number;
}

const Product = () => {
	return (
		<>
			<div className="p-[20px]">
				<div className="flex justify-between py-[10px]">
					<h2 className="text-body font-bold">예약 상품</h2>
					<p className="text-sm pt-[8px]">
						골든티켓 등록번호 {productData.registrationNumber}
					</p>
				</div>
				<div className="flex">
					<img
						src={productData.imageUrl}
						alt="image"
						className="w-[80px] h-[80px]"
					/>
					<div className="w-[60%] px-[10px]">
						<p className="text-lg font-bold">{productData.accommodationName}</p>
						<div className="flex">
							<p className="text-lg pr-[8px]">{productData.roomName}</p>
							<div className="flex items-center">
								<div className="border-r-[1px] border-[#f5f5f5] h-[12px]"></div>
							</div>
							<p className="text-lg pl-[8px]">
								{productData.standardNumber}/최대 {productData.maximumNumber}인
							</p>
						</div>
						<p className="text-lg font-bold pt-[15px]">{productData.price}</p>
					</div>
					<div className="text-sm">
						<div className="flex flex-col justify-center items-center bg-[#fafafa] rounded-[10px] w-[35px] h-[20px] p-[5px] text-center border-[1px] border-[#e0e0e0]">
							<p className="">{productData.reservationType}</p>
						</div>
					</div>
				</div>
				<div className="mt-[20px] mb-[10px] flex justify-around text-center text-m bg-[#fafafa] p-[10px] rounded-[10px]">
					<div>
						<p className="font-bold mb-[5px]">체크인</p>
						<p>{productData.checkInDate}</p>
					</div>
					<div className="p-10px border-r-[1px] border-[#e0e0e0] h-[40px]"></div>
					<div>
						<p className="font-bold mb-[5px]">체크아웃</p>
						<p>{productData.checkOutDate}</p>
					</div>
				</div>
			</div>
			<div className="h-[7px] w-[100%] bg-[#f5f5f5]"></div>
		</>
	);
};

export default Product;
