import React from 'react';
import { ProductItemNew } from '../../../main/component/Product/ProductItemNew';
import { useQuery } from '@tanstack/react-query';
import { getWishes } from '../../../../apis/wishes';
import { ProductSpecialType } from '../../../main/component/Product/ProductListSpecial';
import { Header } from '../../../../component/common/Header';
import { WishItem, WishItemProps } from './WishItem';
import { Loading } from '../../../../component/common/Loading';

export interface WishListProps {
	accommodationImage: string;
	accommodationName: string;
	checkInDate: string;
	checkOutDate: string;
	dDay: number;
	goldenPrice: number;
	id: number;
	nights: number;
	originPrice: number;
	productId: number;
	roomName: string;
	status: string;
	type: string;
	yanoljaPrice: number;
}
const WishList = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['wishes'],
		queryFn: getWishes,
	});
	return (
		<div>
			{isLoading && <Loading />}
			<Header title="찜한 상품" />
			{data?.data?.wishProducts &&
				data?.data?.wishProducts.map((item: WishItemProps) => (
					<div key={item.id} className="w-[95%] mt-11 mb-7 mx-auto">
						<WishItem key={item.id} product={item} />
					</div>
				))}
		</div>
	);
};

export default WishList;
