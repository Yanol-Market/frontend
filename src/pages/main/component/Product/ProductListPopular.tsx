import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductItemPopular } from './ProductItemPopular';
import 'swiper/css';

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

export const ProductListPopular = () => {
	const [products, setProducts] = useState<ProductSpecialType[]>();
	const fetchData = async () => {
		const res = await getProducts();
		setProducts(res);
	};
	useEffect(() => {
		fetchData();
	}, []);
	if (!products) {
		return <div>Loading...</div>;
	}
	return (
		<Swiper slidesPerView={2.5}>
			<div className="">
				{products.map((item) => (
					<SwiperSlide key={item.productId}><ProductItemPopular product={item} /></SwiperSlide>
				))}
			</div>
		</Swiper>
	);
};
