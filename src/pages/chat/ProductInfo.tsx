import React from 'react';
import { ProductData } from './Chat.page';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const ProductInfo: React.FC<{ productData: ProductData | null }> = ({
	productData,
}) => {
	const productName = `${productData?.accommodationName} ${productData?.roomName}`;
	const product = productName.substring(0, 22);
	const startDate = productData?.checkInDate;
	const endDate = productData?.checkOutDate;
	const checkInDate = dayjs(startDate).format('YYYY년 MM월 DD일');
	const checkOutDate = dayjs(endDate).format('DD일');
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(`/product/${productData?.productId}`)}
			className="h-[80px] cursor-pointer flex justify-between px-[20px]"
		>
			<img
				src={productData?.accommodationImage}
				alt="image"
				className="w-[64px] h-[64px] rounded-[12px]"
			/>
			<div className="px-[10px]">
				<p className="text-body">{product}</p>
				<p className="text-lg font-thin">
					{checkInDate} ~ {checkOutDate}
				</p>
				<p className="text-lg font-semibold mb-[20px]">
					{productData?.price.toLocaleString('ko-KR')}원
				</p>
			</div>
			<div className="w-[72px] h-[20px] rounded-[20px] border-[1px] border-[#D9340F] text-[#D9340F] text-sm text-center flex flex-col justify-center">
				<p>{productData?.productStatus}</p>
			</div>
		</div>
	);
};

export default ProductInfo;
