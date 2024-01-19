import React from 'react';
import { ProductSpecialType } from './ProductListSpecial';
import { formatDate } from '../../../../utils/b';
import { Link } from 'react-router-dom';

export const ProductItemPopular = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	return (
		<Link to={`product/${product.productId}`}>
			<div className="w-[115px] h-[215px]">
				<div className="">
					<div className="relative mb-2">
						<img
							className="w-[115px] h-[140px] rounded-[5px]"
							src="assets/images/productImg.jpg"
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
						<button className="absolute bottom-[12px] left-2">
							<img src="assets/images/heart_2.svg" alt="heartImage" />
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
				<div className="flex">
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
