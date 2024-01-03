import React from 'react';
import { ProductSpecialType } from './ProductListSpecial';

export const ProductItemPopular = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	return (
		<div>
			<div className="w-[115px] h-[215px]">
				<div className="relative mb-2">
					<img
						className="w-[115px] h-[140px] rounded-[5px]"
						src="assets/images/productImg.jpg"
						alt="productImg"
					/>
					<div className="flex bg-dateBlue px-[6px] py-[4px] absolute top-0 rounded-tl-[5px] rounded-br-[5px]">
						<p className="text-white font-pre text-[8px] font-semibold">
							12/28(목) ~ 12/30(토)
						</p>
						<p className="text-white font-pre text-[8px] font-semibold"> D-5</p>
					</div>
					<button className="absolute bottom-[12px] left-2">
						<img src="assets/images/heart.svg" alt="heartImage" />
					</button>
				</div>
				<div className="mb-5">
					<p className="font-pre text-m text-fontBlack">{product.name}</p>
					<p className="font-pre text-m text-fontBlack max-w-[115px]">
						{product.option}
					</p>
				</div>
			</div>
			<div className="flex">
				<p className="font-pre text-m text-fontBlack mr-2">골든 특가</p>
				<div className="flex">
					<p className="font-pre text-m text-fontBlack font-semibold">
						{product.price.toLocaleString()}
					</p>
					<p className="font-pre text-m text-fontBlack font-semibold">원</p>
				</div>
			</div>
		</div>
	);
};
