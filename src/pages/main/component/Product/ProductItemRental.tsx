import React, { useState } from 'react';
import { ProductSpecialType } from './ProductListSpecial';
import { formatDate } from '../../../../utils/b';
import { Link } from 'react-router-dom';
import { addWish, deleteWish } from '../../../../apis/wish';

export const ProductItemRental = ({
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
			deleteWish(product?.wishId as number);
			setIsWished(false);
		}
	};
	return (
		<Link to={`/product/${product.productId}`}>
			<div className="w-[130px] h-[255px] flex flex-col justify-between">
				<div className="w-[130px]">
					<div className="relative mb-[10px]">
						<img
							className="w-[130px] h-[160px] rounded-[5px]"
							src={product.accommodationImage}
							alt="productImg"
						/>
						<div className="flex bg-dateBlue px-[6px] py-[4px] absolute top-0 rounded-tl-[5px] rounded-br-[5px]">
							<p className="text-white font-pre text-[8px] font-semibold">
								{`${formatDate(product.checkInDate)} ~ ${formatDate(
									product.checkOutDate,
								)}`}
							</p>
							<p className="text-white font-pre text-[8px] font-semibold">
								{' '}
								D-{product.days}
							</p>
						</div>
						<div className="bg-dateBlue px-[6px] py-[4px] absolute bottom-0 right-0 rounded-br-[5px] rounded-tl-[5px]">
							<p className="text-white font-pre text-sm font-semibold">대실</p>
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
							src={`/assets/images/${
								product.isWished ? 'Fill' : ''
							}heart_white.svg`}
							alt="heartIcon"
						/>
					</button>
					</div>
					<div className="mb-5">
						<p className="font-pre text-m text-fontBlack max-h-[14px] overflow-hidden">
							{product.accommodationName}
						</p>
						<p className="font-pre text-m text-fontBlack max-w-[115px] max-h-[14px] overflow-hidden">
							{product.roomName}
						</p>
					</div>
				</div>
				<div className="flex flex-col">
					<p className="font-pre text-m text-fontBlack mr-2">골든 특가</p>
					<div className="flex">
						<p className="font-pre text-m text-fontBlack font-semibold">
							{product.goldenPrice.toLocaleString()}
						</p>
						<p className="font-pre text-m text-fontBlack font-semibold">원</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
