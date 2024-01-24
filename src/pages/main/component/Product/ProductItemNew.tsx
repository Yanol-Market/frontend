import React, { useState } from 'react';
import { ProductSpecialType } from './ProductListSpecial';
import { formatDate } from '../../../../utils/b';
import { Link, useNavigate } from 'react-router-dom';
import { addWish, deleteWish } from '../../../../apis/wish';

export const ProductItemNew = ({
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
		<Link to={`/product/${product.productId}`}>
			<div className="flex h-[95px] justify-between">
				<div className="relative mb-2 h-full">
					<img
						className="w-[140px] h-[95px] rounded-[5px] object-cover"
						src={product.accommodationImage}
						alt="productImg"
					/>
					<div className="flex bg-dateBlue px-[6px] py-[4px] absolute top-0 rounded-tl-[5px] rounded-br-[5px]">
						<p className="text-white font-pre text-[8px] font-semibold mr-1">
							{`${formatDate(product.checkInDate)} ~ ${formatDate(
								product.checkOutDate,
							)}`}
						</p>
						<p className="text-white font-pre text-[8px] font-semibold">
							D-{product.days}
						</p>
					</div>
					<button
						onClick={(event) => {
							handleClickHeart(Number(product.productId));
							event.stopPropagation();
							event.preventDefault();
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
								{product.marketPriceRatio}
									%
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
									{product.originPriceRatio}
									%
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
								<p className="text-fontBlack font-pre text-m font-semibold">
								{`원(${product.days}박)`}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
