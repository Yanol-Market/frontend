import React, { useEffect, useState } from 'react';
import { ProductSpecialType } from './ProductListSpecial';
import { formatDate } from '../../../../utils/b';
import { Link, useNavigate } from 'react-router-dom';
import { addWish, deleteWish } from '../../../../apis/wish';

export const ProductItemSpecial = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	console.log(product);
	const navigate = useNavigate();
	const [isWished, setIsWished] = useState(product.isWished);
	const handleClickHeart = async (productId: number) => {
		if (!isWished) {
			const isSuccess = await addWish(productId);
			setIsWished(true);
			console.log(isSuccess);
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
						className="w-[124px] h-[150px] rounded-[5px] object-cover"
						src={product.accommodationImage}
						alt="productImg"
					/>
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
								<p className="text-fontBlack font-pre text-m font-semibold">
									{`원(${product.nights}박)`}
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Link>
	);
};
