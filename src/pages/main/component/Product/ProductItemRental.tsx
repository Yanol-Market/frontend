import React from 'react';
import { ProductSpecialType } from './ProductListSpecial';

export const ProductItemRental = ({
	product,
}: {
	product: ProductSpecialType;
}) => {
	return (
		<div className="w-[130px] h-[255px] flex flex-col justify-between">
			<div className="w-[130px]">
				<div className="relative mb-[10px]">
					<img
						className="w-[130px] h-[160px] rounded-[5px]"
						src="assets/images/productImg.jpg"
						alt="productImg"
					/>
					<div className="flex bg-dateBlue px-[6px] py-[4px] absolute top-0 rounded-tl-[5px] rounded-br-[5px]">
						<p className="text-white font-pre text-[8px] font-semibold">
							12/28(목)
						</p>
						<p className="text-white font-pre text-[8px] font-semibold"> D-5</p>
					</div>
                    <div className='bg-dateBlue px-[6px] py-[4px] absolute bottom-0 right-0 rounded-br-[5px] rounded-tl-[5px]'>
                        <p className='text-white font-pre text-sm font-semibold'>대실</p>
                    </div>
					<button className="absolute bottom-[12px] left-2">
						<img src="assets/images/heart_2.svg" alt="heartImage" />
					</button>
				</div>
				<div className="mb-5">
					<p className="font-pre text-m text-fontBlack max-h-[14px] overflow-hidden">{product.name}</p>
					<p className="font-pre text-m text-fontBlack max-w-[115px] max-h-[14px] overflow-hidden">
						{product.option}
					</p>
				</div>
			</div>
			<div className="flex flex-col">
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
