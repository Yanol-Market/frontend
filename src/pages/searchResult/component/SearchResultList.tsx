import React, { useEffect, useRef, useState } from 'react';

import { SearchResultProduct } from './SearchResultProduct';
import { getProducts } from '../../../apis/home';
import { getSearchProducts } from '../../../apis/searchResult';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { Diversity1, DomainVerification } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';

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
	wishId: number;
	isWished: boolean;
	originPriceRatio: number;
	marketPriceRatio: number;
};
type dataStatusType = {
	last: boolean;
};
export const SearchResultList = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const areaCode = searchParams.get('selectOption');
	const keyword = searchParams.get('inputValue');
	const checkInDate = searchParams.get('checkIndate');
	const checkOutDate = searchParams.get('checkOutDate');
	const priceRange = searchParams.get('priceRange');
	const [dataStatus, setDataStatus] = useState<dataStatusType>();
	const startDate = moment(moment(checkInDate, 'YY-MM-DD').toDate()).format(
		'YYYY-MM-DD',
	);
	const listRef = useRef<HTMLDivElement>(null);
	const endDate = moment(moment(checkOutDate, 'YY-MM-DD').toDate()).format(
		'YYYY-MM-DD',
	);
	const [products, setProducts] = useState<ProductSpecialType[]>();

	const [visibleProducts, setVisibleProducts] =
		useState<ProductSpecialType[]>();
	const [totalCount, setTotalCount] = useState(0);
	const fetchData = async () => {
		const res = await getSearchProducts(
			areaCode as string,
			keyword as string,
			startDate as string,
			endDate as string,
			priceRange as string,
		);

		setDataStatus(res.data);
		setTotalCount(res.data.content[0].totalCount);
		setProducts(res.data.content[0].wishedProductResponseList);
	};
	const reFetchData = async () => {
		if (products) {
			const res = await getSearchProducts(
				areaCode as string,
				keyword as string,
				startDate as string,
				endDate as string,
				priceRange as string,
				products[products.length - 1].productId,
				products[products.length - 1].checkOutDate,
			);
			setDataStatus(res.data);
			setProducts((prev) => {
				const data = prev?.concat(
					res.data.content[0].wishedProductResponseList,
				);
				return data;
			});
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setVisibleProducts(products);
	}, [products]);

	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			if (!dataStatus?.last) {
				if (products) {
					reFetchData();
				}
			}
			// 실행할 함수
		}
	}, [inView]);

	if (!visibleProducts) {
		return <div>Loading...</div>;
	}

	return (
		<div id="result" className="smooth">
			<p className="pb-[13px] flex justify-end text-m text-descGray ">
				총{totalCount}건
			</p>
			{!totalCount && (
				<p className="text-descGray text-center">
					해당 조건에 맞는 상품이 없습니다.
				</p>
			)}
			<div className="flex flex-col gap-4 mb-5">
				{visibleProducts.map((item) => (
					<SearchResultProduct key={item.productId} product={item} />
				))}
			</div>
			<div ref={ref}></div>
			<a
				className="absolute bottom-[30px] right-[30px] bg-white p-2 rounded-3xl"
				href="#result"
			>
				<img src="assets/images/arrowTop.svg" alt="Arrow" />
			</a>
		</div>
	);
};
