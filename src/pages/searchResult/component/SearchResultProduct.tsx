import React from 'react';
import { ProductSpecialType } from '../../main/component/Product/ProductListSpecial';

export const SearchResultProduct = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	return (
		<div className="flex flex-col">
			<div className="relative w-full mb-[13px]">
				<img
					className="w-full h-[155px] rounded-[5px]"
					src="assets/images/productImg.jpg"
					alt="productImg"
				/>
				<div className="flex bg-dateBlue px-[8px] py-[4px] absolute top-0 rounded-tl-[5px] rounded-br-[5px]">
					<p className="text-white font-pre text-[12px] font-semibold">
						12/28(목) ~ 12/30(토)
					</p>
					<p className="text-white font-pre text-[12px] font-semibold"> D-5</p>
				</div>
				<button className="absolute bottom-[10px] left-[10px]">
					<img src="assets/images/heart_2.svg" alt="heartImage" />
				</button>
			</div>
			<div className="flex flex-col w-full justify-between">
				<div className="flex-col w-full mb-[15px]">
					<div>
						<p className="text-fontBlack font-pre text-lg font-semibold">
							{product.name}
						</p>
						<p className="text-fontBlack font-pre text-lg font-normal">
							{product.option}
						</p>
					</div>
				</div>
				<div className='w-full'>
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
