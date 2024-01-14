import React from 'react';
import { Header } from '../../component/common/Header';
import { useParams, useSearchParams } from 'react-router-dom';

const EditProd = () => {
	const { productId } = useParams();
	const [searchParams] = useSearchParams();
	const yanoljaPrice = searchParams.get('yanoljaPrice');
	const goldenPrice = searchParams.get('goldenPrice');

	console.log(productId, yanoljaPrice, goldenPrice);

	return (
		<div>
			<Header title={'판매 상품 수정 '} />{' '}
		</div>
	);
};

export default EditProd;
