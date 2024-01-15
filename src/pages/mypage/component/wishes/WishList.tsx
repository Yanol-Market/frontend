import React from 'react';
import { ProductItemNew } from '../../../main/component/Product/ProductItemNew';
import { useQuery } from '@tanstack/react-query';
import { getWishes } from '../../../../apis/wishes';
import { ProductSpecialType } from '../../../main/component/Product/ProductListSpecial';
import { Header } from '../../../../component/common/Header';

const WishList = () => {
	const { data } = useQuery({
		queryKey: ['wishes'],
		queryFn: getWishes,
	});

	return (
		<>
			<Header title="찜한 상품" />

			{data &&
				data.map((item: ProductSpecialType) => (
					<div key={item.productId} className="w-[95%] mt-11 mb-7 mx-auto">
						<ProductItemNew key={item.productId} product={item} />
					</div>
				))}
		</>
	);
};

export default WishList;
