import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductItemPopular } from './ProductItemPopular';
import 'swiper/css';

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

export const ProductListPopular = ({ product }: any) => {
	if (!product) {
		return <div>Loading...</div>;
	}
	return (
		<div className="z-0 relative">
			<Swiper slidesPerView={2.5}>
				<div className="bg-black text-start w-50">
					{product.map((item:any) => (
						<SwiperSlide key={item.productId}>
							<ProductItemPopular product={item} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</div>
	);
};
