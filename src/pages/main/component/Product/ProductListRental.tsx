import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProductItemRental } from './ProductItemRental';

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

export const ProductListRental = () => {
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
		<div className="z-0 relative">
			<Swiper slidesPerView={2.5} spaceBetween={20} className="z-0">
				<div className="z-50">
					{products.map((item) => (
						<SwiperSlide key={item.productId}>
							<ProductItemRental product={item} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</div>
	);
};
