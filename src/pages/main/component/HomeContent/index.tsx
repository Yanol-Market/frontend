import React, { useEffect, useState } from 'react';
import { HomeContentTitle } from './HomeContentTitle';
import { ProductListSpecial } from '../Product/ProductListSpecial';
import { ProductListPopular } from '../Product/ProductListPopular';
import { ProductListNew } from '../Product/ProductListNew';
import { ProductListRental } from '../Product/ProductListRental';
import { getProducts } from '../../../../apis/home';
import Product from '../../../reservation/Product';

type Product = {
	goldenPriceTop5: Array<any>;
	dayUseTop5: Array<any>;
	recentRegisteredTop5: Array<any>;
	viewCountTop5: Array<any>;
};

export const HomeContent = () => {
	const [product, setProduct] = useState<Product>();
	useEffect(() => {
		const fetchData = async () => {
			const res = await getProducts();
			setProduct(res.data.homeProductResponse);
		};
		fetchData();
	}, []);
	return (
		<div className="bg-homeMain overflow-hidden">
			<div className=" bg-white pt-7 px-5 border-solid border-1 border-white-1 rounded-t-2xl pb-[15vh] h-[80vh] overflow-scroll">
				<div className="">
					<div className="mb-7">
						<HomeContentTitle
							title="파격적인 골든특가를 만나보세요!"
							img="assets/images/star.svg"
							desc="골든티켓이 준비한 착한 가격"
						/>
						<ProductListSpecial product={product?.goldenPriceTop5} />
					</div>
					<div className="mb-[42px] overflow-hidden">
						<div className="mb-5">
							<HomeContentTitle
								title="핫클릭 가장 많이 눌러봤어요"
								img="assets/images/fire.svg"
								desc="누구나 탐내고 있는 핫한 상품"
							/>
						</div>
						<ProductListPopular product={product?.viewCountTop5} />
					</div>
					<div className="mb-[30px]">
						<div className="mb-4">
							<HomeContentTitle
								title="갓 올라와 따끈따끈 합니다"
								img="assets/images/light.svg"
								desc="방금 막 등록된 신품!"
							/>
						</div>
						<ProductListNew product={product?.recentRegisteredTop5} />
					</div>
					<div className="mb-4">
						<HomeContentTitle
							title="클릭 여기서 바로 빌려요!"
							img="assets/images/key.svg"
							desc="대실 상품을 살펴보세요"
						/>
					</div>
					<ProductListRental product={product?.dayUseTop5} />
				</div>
			</div>
		</div>
	);
};
