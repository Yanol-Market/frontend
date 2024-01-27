import React, { useState } from 'react';
import { formatDate } from '../../../../utils/b';
import { useNavigate } from 'react-router-dom';
import { deleteWish } from '../../../../apis/wish';
export interface WishItemProps {
	accommodationImage: string;
	accommodationName: string;
	checkInDate: string;
	checkOutDate: string;
	dDay: number;
	goldenPrice: number;
	id: number;
	nights: number;
	originPrice: number;
	productId: number;
	roomName: string;
	status: string;
	type: string;
	yanoljaPrice: number;
}
export const WishItem = ({ product }: { product: WishItemProps }) => {
	const navigate = useNavigate();
	const [isWished, setIsWished] = useState(true);
	const handleClickProduct = () => {
		navigate(`/product/${product.productId}`);
	};
	const handleClickDeleteWish = () => {
		deleteWish(product.productId as number);
		setIsWished(false);
	};
	return (
		<div className="flex h-[95px] cursor-pointer">
			<div className="relative mb-2 ml-2 h-full">
				<img
					className="w-[120px] h-[95px] rounded-[5px]"
					src={product.accommodationImage}
					alt="productImg"
				/>
				{!(product.status === 'SELLING') && (
					<div className="w-full h-full bg-black opacity-[80%] absolute bottom-[0px] flex flex-col justify-center items-center">
						<img
							className="mb-1 w-4 y-4"
							src={`/assets/images/ic_${product.status}.svg`}
							alt="ic_calendar"
						/>
						<pre className="text-[5px] text-center text-white">
							{/* {productStatusAlertTitle(product.status as string)} */}
						</pre>
					</div>
				)}
				{product.type === 'DAY_USE' && (
					<div className="bg-dateBlue px-[6px] py-[4px] absolute bottom-0 right-0 rounded-br-[5px] rounded-tl-[5px]">
						<p className="text-white font-pre text-sm font-semibold">대실</p>
					</div>
				)}
				<div className="flex bg-dateBlue px-[6px] py-[4px] absolute top-0 rounded-tl-[5px] rounded-br-[5px]">
					<p className="text-white font-pre text-[8px] font-semibold mr-1">
						{`${formatDate(product.checkInDate)} ~ ${formatDate(
							product.checkOutDate,
						)}`}
					</p>
					<p className="text-white font-pre text-[8px] font-semibold">
						D-{product.dDay}
					</p>
				</div>
				<button
					className="absolute bottom-[8px] left-[6px]"
					onClick={handleClickDeleteWish}
				>
					<img
						src={`/assets/images/${isWished ? 'Fill' : ''}heart_xl.svg`}
						alt="heartIcon"
					/>
				</button>
			</div>
			<div
				className="flex flex-col w-[60%] justify-between ml-3 cursor-pointer"
				onClick={handleClickProduct}
			>
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
						<p className="text-descGray font-pre text-m">현재 야놀자 판매가</p>
						<div className="flex">
							<p className="text-descGray font-pre text-m mr-1">
								{(
									(1 - product.goldenPrice / product.yanoljaPrice) *
									100
								).toFixed(0)}
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
								{(
									(1 - product.goldenPrice / product.originPrice) *
									100
								).toFixed(0)}
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
							<p className="text-fontBlack font-pre text-m font-semibold">원</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
