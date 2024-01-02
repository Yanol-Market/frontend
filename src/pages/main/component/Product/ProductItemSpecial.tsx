import React from 'react';
import { ProductSpecialType } from './ProductListSpecial';

export const ProductItemSpecial = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	return (
		<main className="flex w-full mt-5">
			<div className="relative w-[38%] h-full">
				<img
					className="w-[124px] h-[150px] rounded-[5px]"
					src={'/assets/images/productImg.jpg'}
					alt="productImg"
				/>
				<button className="absolute bottom-[10px] left-[10px]">
					<img src="/assets/images/heart.svg" alt="heart" />
				</button>
			</div>
			<div className="flex flex-col w-[60%] justify-between ml-4">
				<div className="flex-col w-full">
					<div className="flex gap-[5px]">
						<p className="bg-dateBlue px-[7px] py-[3px] text-sm font-semibold font-pre text-white rounded-[20px]">
							12/30(토) ~ 12/31(일)
						</p>
						<p className="bg-dateBlue px-[7px] py-[3px] text-sm font-semibold font-pre text-white rounded-[20px]">
							D-{product.dDay}
						</p>
					</div>
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
							<p className="text-descGray font-pre text-m mr-1">{product.marketPriceRatio}%</p>
							<p className="text-descGray font-pre text-m line-through">
								{product.marketPrice}
							</p>
							<p className="text-descGray font-pre text-m line-through">원</p>
						</div>
					</div>
					<div className="flex justify-between w-[100%]">
						<p className="text-descGray font-pre text-m">기존 구매가</p>
						<div className="flex">
							<p className="text-descGray font-pre text-m mr-1">{product.purchasePriceRatio}%</p>
							<p className="text-descGray font-pre text-m line-through">
								{product.purchasePrice}
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
								{product.price}
							</p>
							<p className="text-fontBlack font-pre text-m font-semibold">원</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
