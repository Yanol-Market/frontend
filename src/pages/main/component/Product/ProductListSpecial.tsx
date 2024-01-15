import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { ProductItemSpecial } from './ProductItemSpecial';
import { PlusButton } from '../PlusButton';

export type ProductSpecialType = {
	productId: number;
	name: string;
	option: string;
	checkIn: string;
	checkOut: string;
	dDay: number;
	marketPrice: number;
	marketPriceRatio: number;
	purchasePrice: number;
	purchasePriceRatio: number;
	price: number;
};

export const ProductListSpecial = () => {
	const [products, setProducts] = useState<ProductSpecialType[]>();
	const [visibleProducts, setVisibleProducts] =
		useState<ProductSpecialType[]>();
	const [showAll, setShowAll] = useState<boolean>(false);
	const fetchData = async () => {
		const res = await getProducts();
		setProducts(res);
	};
	const handleClickPlusButton = () => {
		setVisibleProducts(products);
		setShowAll(true);
	};
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setVisibleProducts(products?.slice(0, 2));
	}, [products]);

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
