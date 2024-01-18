import React, { useEffect, useState } from 'react';

import { SearchResultProduct } from './SearchResultProduct';
import { getProducts } from '../../../apis/home';

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

export const SearchResultList = () => {
	const [products, setProducts] = useState<ProductSpecialType[]>();
	const [visibleProducts, setVisibleProducts] =
		useState<ProductSpecialType[]>();
	const fetchData = async () => {
		const res = await getProducts();
		setProducts(res);
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
		<div id="result" className='smooth'>
			<p className='pb-[13px] flex justify-end text-m text-descGray '>총{23}건</p>
			<div className="flex flex-col gap-4 mb-5">
				{visibleProducts.map((item) => (
					<SearchResultProduct key={item.productId} product={item} />
				))}
			</div>
			<a className='absolute bottom-[30px] right-[30px] bg-white p-2 rounded-3xl' href="#result"><img src="assets/images/arrowTop.svg" alt="Arrow" /></a>
		</div>
	);
};
