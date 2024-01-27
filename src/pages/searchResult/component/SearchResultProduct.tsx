import React, { useState } from 'react';
import { ProductSpecialType } from '../../main/component/Product/ProductListSpecial';
import { formatDate } from '../../../utils/b';
import { Link } from 'react-router-dom';
import { addWish, deleteWish } from '../../../apis/wish';
import { productStatusAlertTitle } from '../../products/component/ProductInfo';

export const SearchResultProduct = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	const [isWished, setIsWished] = useState(product.isWished);
	const handleClickHeart = async (productId: number) => {
		if (!isWished) {
			addWish(productId);
			setIsWished(true);
			return;
		} else {
			deleteWish(product?.productId as number);
			setIsWished(false);
		}
	};
	return (
		<Link to={`/product/${product.productId}`}>
			<div className="flex flex-col">
				<div className="relative w-full mb-[13px]">
					<img
						className="w-full h-[155px] rounded-[5px]"
						src={product.accommodationImage}
						alt="productImg"
					/>
					{product.reservationType === 'DAY_USE' && (
						<div className="bg-dateBlue px-[6px] py-[4px] absolute bottom-0 right-0 rounded-br-[5px] rounded-tl-[5px]">
							<p className="text-white font-pre text-sm font-semibold">대실</p>
						</div>
					)}
					{!(product.productStatus === 'SELLING') && (
						<div className="w-full h-full bg-black opacity-[80%] absolute bottom-[0px] flex flex-col justify-center items-center">
							<img
								className="mb-2 w-10 y-10"
								src={`/assets/images/ic_${product.productStatus}.svg`}
								alt="ic_calendar"
							/>
							<pre className="text-[12px] text-center text-white font-semibold">
								{productStatusAlertTitle(product.productStatus as string)}
							</pre>
						</div>
					)}
					<div className="flex bg-dateBlue px-[8px] py-[4px] absolute top-0 rounded-tl-[5px] rounded-br-[5px]">
						<p className="text-white font-pre text-[12px] font-semibold mr-1">
							{`${formatDate(product.checkInDate)} ~ ${formatDate(
								product.checkOutDate,
							)}`}
						</p>
						<p className="text-white font-pre text-[12px] font-semibold">{`D-${product.days}`}</p>
					</div>
					<button
						onClick={(event) => {
							event.preventDefault();
							handleClickHeart(Number(product.productId));
							// event.stopPropagation();
						}}
						className="absolute bottom-[10px] left-[10px]"
					>
						<img
							src={`/assets/images/${isWished ? 'Fill' : ''}heart_white.svg`}
							alt="heartIcon"
						/>
					</button>
				</div>
				<div className="flex flex-col w-full justify-between">
					<div className="flex-col w-full mb-[15px]">
						<div>
							<p className="text-fontBlack font-pre text-lg font-semibold">
								{product.accommodationName}
							</p>
							<p className="text-fontBlack font-pre text-lg font-normal">
								{product.roomName}
							</p>
						</div>
					</div>
					<div className="w-full">
						<div className="flex justify-between w-[100%]">
							<p className="text-descGray font-pre text-m">
								현재 야놀자 판매가
							</p>
							<div className="flex">
								<p className="text-descGray font-pre text-m mr-1">
									{product.marketPriceRatio}%
								</p>
								<p className="text-descGray font-pre text-m line-through">
									{product.yanoljaPrice.toLocaleString()}
								</p>
								<p className="text-descGray font-pre text-m line-through">원</p>
							</div>
						</div>
						<div className="flex justify-between w-[100%]">
							<p className="text-descGray font-pre text-m">기존 구매가</p>
							<div className="flex">
								<p className="text-descGray font-pre text-m mr-1">
									{' '}
									{product.originPriceRatio}%
								</p>
								<p className="text-descGray font-pre text-m line-through">
									{product.originPrice.toLocaleString()}
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
									{product.goldenPrice.toLocaleString()}
								</p>
								{product.reservationType === 'DAY_USE' ? (
									<p className="text-fontBlack font-pre text-m font-semibold">
										원
									</p>
								) : (
									<p className="text-fontBlack font-pre text-m font-semibold">
										{`원(${product.nights}박)`}
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
