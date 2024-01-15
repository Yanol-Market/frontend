import React from 'react';
import { ProductData } from './ChatPage';

const ProductInfo: React.FC<{ productData: ProductData }> = ({
	productData,
}) => {
	const productName = productData.productName;
	const product = productName.substring(0, 15);
	return (
		<div className="h-[80px] flex justify-between px-[20px]">
			<img src={productData.image} alt="image" className="w-[64px] h-[64px]" />
			<div className="px-[10px]">
				<p className="text-body">{product}..</p>
				<p className="text-lg font-thin">{productData.checkInOut}</p>
				<p className="text-lg font-semibold">{productData.price}</p>
			</div>
			<div className="w-[72px] h-[20px] rounded-[20px] border-[1px] border-[#D9340F] text-[#D9340F] text-sm text-center flex flex-col justify-center">
				<p>{productData.status}</p>
			</div>
		</div>
	);
};

export default ProductInfo;
