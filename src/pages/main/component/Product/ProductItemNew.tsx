import React from 'react';
import { ProductSpecialType } from './ProductListSpecial';

export const ProductItemNew = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	return (
		<div className="flex h-[95px]">
			<div className="relative mb-2 h-full">
				<img
					className="w-[120px] h-[95px] rounded-[5px]"
					src="assets/images/productImg.jpg"
					alt="productImg"
				/>
				<div className="flex bg-dateBlue px-[6px] py-[4px] absolute top-0 rounded-tl-[5px] rounded-br-[5px]">
					<p className="text-white font-pre text-[8px] font-semibold">
						12/28(목) ~ 12/30(토)
					</p>
					<p className="text-white font-pre text-[8px] font-semibold"> D-5</p>
				</div>
				<button className="absolute bottom-[10px] left-[10px]">
					<img src="assets/images/heart_2.svg" alt="heartImage" />
				</button>
			</div>
			<div className="flex flex-col w-[60%] justify-between ml-4">
				<div className="flex-col w-full">

					<div>
						<p className="text-fontBlack font-pre text-botton font-normal">
							{product.name}
						</p>
						<p className="text-fontBlack font-pre text-botton font-normal">
							{product.option}
						</p>
					</div>
				</div>
				<div>
					<div className="flex justify-between w-[100%]">
						<p className="text-descGray font-pre text-m">현재 야놀자 판매가</p>
						<div className="flex">
							<p className="text-descGray font-pre text-m mr-1">
								{product.marketPriceRatio}%
							</p>
							<p className="text-descGray font-pre text-m line-through">
								{product.marketPrice.toLocaleString()}
							</p>
							<p className="text-descGray font-pre text-m line-through">원</p>
						</div>
					</div>
					<div className="flex justify-between w-[100%]">
						<p className="text-descGray font-pre text-m">기존 구매가</p>
						<div className="flex">
							<p className="text-descGray font-pre text-m mr-1">
								{product.purchasePriceRatio}%
							</p>
							<p className="text-descGray font-pre text-m line-through">
								{product.purchasePrice.toLocaleString()}
							</p>
							<p className="text-descGray font-pre text-m line-through">원</p>
						</div>
					</div>
					<div className="flex justify-between w-[100%]">
						<p className="text-fontBlack font-pre text-m font-semibold">
							골든 특가
						</p>
						<div className="flex">
							<p className="text-fontBlack font-pre text-m font-semibold">
								{product.price.toLocaleString()}
							</p>
							<p className="text-fontBlack font-pre text-m font-semibold">원</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
