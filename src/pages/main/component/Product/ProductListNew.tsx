import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { ProductItemNew } from './ProductItemNew';
import { PlusButton } from '../PlusButton';

export type ProductSpecialType = {
	productId: number;
	accommodationImage: string;
	accommodationName: string;
	reservationType: string;
	roomName: string;
	checkInDate: string;
	checkOutDate: string;
	nights: number;
	days: number;
	originPrice: number;
	yanoljaPrice: number;
	goldenPrice: number;
	productStatus: string;
};

export const ProductListNew = ({ product }: any) => {
	const [visibleProducts, setVisibleProducts] =
		useState<ProductSpecialType[]>();
	const [showAll, setShowAll] = useState<boolean>(false);

	const handleClickPlusButton = () => {
		setVisibleProducts(product);
		setShowAll(true);
	};
	useEffect(() => {
		setVisibleProducts(product?.slice(0, 2));
	}, [product]);

	if (!visibleProducts) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div className="flex flex-col gap-4 mb-5">
				{visibleProducts.map((item) => (
					<ProductItemNew key={item.productId} product={item} />
				))}
			</div>
			{!showAll && (
				<div className="flex justify-center">
					<PlusButton action={handleClickPlusButton} />
				</div>
			)}
		</div>
	);
};
