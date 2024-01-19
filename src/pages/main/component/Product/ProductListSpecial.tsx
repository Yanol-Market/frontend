import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { ProductItemSpecial } from './ProductItemSpecial';
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

export const ProductListSpecial = ({ product }: any) => {
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
			<div className="mb-5">
				{visibleProducts.map((item) => (
					<ProductItemSpecial key={item.productId} product={item} />
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
