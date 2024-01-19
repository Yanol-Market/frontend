import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProductItemRental } from './ProductItemRental';

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

export const ProductListRental = ({ product }: any) => {
	if (!product) {
		return <div>Loading...</div>;
	}
	return (
		<div className="z-0 relative">
			<Swiper slidesPerView={2.5} spaceBetween={20} className="z-0">
				<div className="z-50">
					{product.map((item: any) => (
						<SwiperSlide key={item.productId}>
							<ProductItemRental product={item} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</div>
	);
};
