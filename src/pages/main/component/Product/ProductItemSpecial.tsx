import React, { useEffect, useState } from 'react';
import { ProductSpecialType } from './ProductListSpecial';
import { formatDate } from '../../../../utils/b';
import { Link, useNavigate } from 'react-router-dom';
import { addWish, deleteWish } from '../../../../apis/wish';
import { productStatusAlertTitle } from '../../../products/component/ProductInfo';

export const ProductItemSpecial = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	const navigate = useNavigate();
	const [isWished, setIsWished] = useState(product.isWished);
	const handleClickHeart = async (productId: number) => {
		if (!isWished) {
			const isSuccess = await addWish(productId);
			setIsWished(true);
			if (isSuccess.response && isSuccess.response.status === 401) {
				navigate('/signin');
			}

			return;
		} else {
			const isSuccess = await deleteWish(product?.productId as number);
			setIsWished(false);
			if (isSuccess.response && isSuccess.response.status === 401) {
				navigate('/signin');
			}
		}
	};
	return (
		<Link to={`product/${product.productId}`}>
			<main className="flex w-full mt-5">
				<div className="relative w-[38%] h-full">
					<img
						className="w-full h-[150px] rounded-[5px] object-cover"
						src={product.accommodationImage}
						alt="productImg"
					/>
					{!(product.productStatus === 'SELLING') && (
						<div className="w-full h-full bg-black opacity-[80%] absolute bottom-[0px] flex flex-col justify-center items-center">
							<img
								className="mb-2 w-8 y-8"
								src={`/assets/images/ic_${product.productStatus}.svg`}
								alt="ic_calendar"
							/>
							<pre className="text-[5px] text-center text-white font-semibold">
								{productStatusAlertTitle(product.productStatus as string)}
							</pre>
						</div>
					)}
					{product.reservationType === 'DAY_USE' && (
						<div className="bg-dateBlue px-[6px] py-[4px] absolute bottom-0 right-0 rounded-br-[5px] rounded-tl-[5px]">
							<p className="text-white font-pre text-sm font-semibold">대실</p>
						</div>
					)}
					<button
						onClick={(event) => {
							event.preventDefault();
							handleClickHeart(Number(product.productId));
							// event.stopPropagation();
						}}
						className="absolute bottom-[10px] left-[10px]"
					>
						<img
							src={`/assets/images/${isWished ? 'fill' : ''}heart_white.svg`}
							alt="heartIcon"
						/>
					</button>
				</div>
				<div className="flex flex-col w-[60%] justify-between ml-4">
					<div className="flex-col w-full">
						<div className="flex gap-[5px] mb-1">
							<p className="bg-dateBlue px-[7px] py-[3px] text-sm font-semibold font-pre text-white rounded-[20px]">
								{`${formatDate(product.checkInDate)} ~ ${formatDate(
									product.checkOutDate,
								)}`}
							</p>
							<p className="bg-dateBlue px-[7px] py-[3px] text-sm font-semibold font-pre text-white rounded-[20px]">
								D-{product.days}
							</p>
						</div>
						<div>
							<p className="text-fontBlack font-pre text-lg font-normal">
								{product.accommodationName}
							</p>
							<p className="text-fontBlack font-pre text-lg font-normal">
								{product.roomName}
							</p>
						</div>
					</div>
					<div>
						<div className="flex justify-between w-[100%]">
							<p className="text-descGray font-pre text-m">
								현재 야놀자 판매가
							</p>
							<div className="flex">
								<p className="text-descGray font-pre text-m mr-1">
									{product.marketPriceRatio}%
								</p>
								<p className="text-descGray font-pre text-m line-through">
									{product.yanoljaPrice}
								</p>
								<p className="text-descGray font-pre text-m line-through">원</p>
							</div>
						</div>
						<div className="flex justify-between w-[100%]">
							<p className="text-descGray font-pre text-m">기존 구매가</p>
							<div className="flex">
								<p className="text-descGray font-pre text-m mr-1">
									{product.originPriceRatio}%
								</p>
								<p className="text-descGray font-pre text-m line-through">
									{product.originPrice}
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
			</main>
		</Link>
	);
};
